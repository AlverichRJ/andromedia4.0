import { TESTIMONIALS } from "../constants";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.8,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Testimonials = () => {
  return (
    <div
      className="relative  container mx-auto mt-52 py-16 tracking-tighter h-[100vh]"
      id="testimonials"
    >
      <h2 className="relative -top-20 mb-36 text-center text-4xl font-semibold">
        Nuestro equipo de Marketing
      </h2>
      <motion.div
        className="mx-auto max-w-xl"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={index}
            className="mx-6 mb-8 flex flex-col items-center rounded-lg border border-dotted border-purple-800 bg-[#efefef] p-6 md:flex-row"
            variants={itemVariants}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="mb-4 mr-6 h-16 w-16 rounded-full md:mb-0 "
            />
            <div>
              <p className="mb-4 italic text-black">"{testimonial.quote}"</p>
              <p className="font-bold text-black" >{testimonial.name}</p>
              <p className="text-gray-400">{testimonial.title}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
