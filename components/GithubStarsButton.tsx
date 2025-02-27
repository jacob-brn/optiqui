import { FaGithub } from "react-icons/fa6";
import { Star } from "lucide-react";
import Link from "next/link";
import NumberTicker from "./NumberTicker";

const GithubStarsButton = async () => {
  let stars = 18;

  try {
    const response = await fetch(
      "https://api.github.com/repos/jacob-brn/optiqui",
      {
        headers: process.env.GITHUB_OAUTH_TOKEN
          ? {
              Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
              "Content-Type": "application/json",
            }
          : {},
        next: {
          revalidate: 3600,
        },
      }
    );

    if (response.ok) {
      const data = await response.json();
      stars = data.stargazers_count || stars;
    }
  } catch (error) {
    console.error("Error fetching GitHub stars:", error);
  }

  return (
    <Link
      href={"https://github.com/jacob-brn/optiqui"}
      target="_blank"
      className="group flex flex-row items-center justify-center gap-x-2 bg-gradient-to-t from-neutral-800 via-neutral-900 to-neutral-950 text-white rounded-md px-5 py-2 border"
    >
      <FaGithub className="size-4" />
      <div className="font-medium">
        <span className="lg:hidden">Star</span>
        <span className="hidden lg:inline">Star on GitHub</span>
      </div>
      <div className="flex flex-row items-center justify-center gap-x-1">
        <Star className="size-4 text-gray-500 fill-current transition-all duration-300 group-hover:text-yellow-300" />
        <NumberTicker value={stars} />
      </div>
    </Link>
  );
};

export default GithubStarsButton;
