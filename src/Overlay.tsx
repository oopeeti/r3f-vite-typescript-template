import { motion } from 'framer-motion';

interface OverlayProps {
  title?: String;
}

export default function Overlay({
  title = 'R3F - Vite Template'
}: OverlayProps) {
  return (
    <>
      <div className="absolute top-0 left-0 w-full h-full uppercase tracking-widest">
        <motion.div
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-col items-center space-y-2 justify-center"
        >
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="italic">by stidi</p>
        </motion.div>
      </div>
    </>
  );
}
