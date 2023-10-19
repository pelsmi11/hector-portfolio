import { CardIframe } from "@/src/components";
import { POSTS } from "@/src/utils/constants";
import { motion } from "framer-motion";

export const BlogSection = () => {
  return (
    <section className="bg-ui-gray-200 w-full py-8 px-6 min-h-[50vh]">
      <div className="container mx-auto">
        <div className="text-center lg:text-left mt-4 py-6">
          <h2 className="font-bold text-4xl mb-4 text-center">Blog</h2>
        </div>
        <div className="flex justify-center min-h-[60vh] w-full">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  place-items-center
             lg:place-items-start w-full"
          >
            {POSTS.map((post) => (
              <CardIframe key={post} embedUrl={post} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
