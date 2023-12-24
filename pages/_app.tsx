import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

import Layout from "@/components/Layout";
import Transition from "@/components/Transition";

function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<Layout>
			<AnimatePresence mode="wait">
				<motion.div key={router.route} className="h-full">
					<Transition />
					<Component {...pageProps} />
				</motion.div>
			</AnimatePresence>
		</Layout>
	);
}

export default App;
