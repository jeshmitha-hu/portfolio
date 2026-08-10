import { motion } from "framer-motion";

type Props = {

    children:React.ReactNode;

};

const FadeIn = ({children}:Props)=>{

    return(

        <motion.div

            initial={{

                opacity:0,

                y:60

            }}

            whileInView={{

                opacity:1,

                y:0

            }}

            viewport={{

                once:true

            }}

            transition={{

                duration:.7

            }}

        >

            {children}

        </motion.div>

    );

};

export default FadeIn;