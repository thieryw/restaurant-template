import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"
import { useState, useEffect } from "react"
import { HeroSection } from "components/HeroSection"
import { DesignOfHomePage } from "./DesignOfHomePage"
import backgroundImageUrl from "assets/food-pho.webp"
import { useHeight } from "hooks/useHeightContext"
import { useDomRect } from "powerhooks/useDomRect"
import Typography from "@mui/material/Typography"
import { motion } from "framer-motion";


export function Home() {

    const { ref, domRect: { height } } = useDomRect()
    const { setHeight } = useHeight()

    useEffect(() => {
        setHeight(height);
    }, [height]);


    const [checked, setChecked] = useState(false)

    const { classes } = useStyles()

    useEffect(() => {
        setChecked(true)
    }, [])

    return (
        <Fade
            in={checked}
            timeout={800}
        >
            <div className={classes.root}>
                <HeroSection
                    ref={ref}
                    className={classes.left}
                    backgroundImageUrl={backgroundImageUrl}
                    //heroText={<>Zen <br /> Gourmet</>}
                    //the title has been modified with a very basic example of framer-motion animation.
                    //This of course can be refactored but I will leave it like that for the sake of simplicity.
                    //The two animations are identical except for the fact that the de delay is different,
                    //showing the second line of title half a second later than the first
                    heroText={
                        <div>
                            <motion.div
                                initial={{
                                    y: "-50%",
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    ease: "easeOut",
                                    duration: 1.5,
                                    delay: 1

                                }}
                            >
                                <Typography
                                    variant='h1'
                                    className={classes.heroText}
                                >
                                    Zen
                                </Typography>
                            </motion.div>

                            <motion.div
                                initial={{
                                    y: "-50%",
                                    opacity: 0
                                }}
                                animate={{
                                    y: 0,
                                    opacity: 1
                                }}
                                transition={{
                                    ease: "easeOut",
                                    duration: 1.5,
                                    delay: 1.5
                                }}
                            >
                                <Typography
                                    variant='h1'
                                    className={classes.heroText}
                                >
                                    Gourmet
                                </Typography>

                            </motion.div>

                        </div>
                    }
                    //Here id a factorized version of the same animation
                    /*heroText={
                        <div>
                            {

                                ["Zen", "Gourmet"].map((title, index) => <motion.div
                                    initial={{
                                        y: "-50%",
                                        opacity: 0
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1
                                    }}
                                    transition={{
                                        ease: "easeOut",
                                        duration: 1.5,
                                        delay: (index / 2) + 1

                                    }}
                                    key={title}
                                >
                                    <Typography
                                        variant='h1'
                                        className={classes.heroText}
                                    >
                                        {title}
                                    </Typography>

                                </motion.div>)
                            }
                        </div>
                    }*/
                />
                <DesignOfHomePage
                    className={classes.right}
                />
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName({ Home })
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "gap": theme.spacing(2),
            "padding": theme.spacing(2),
            "boxSizing": "border-box",
            "height": "100%",

            [theme.breakpoints.only('tablet')]: {
                "flexDirection": "column",
                "height": "100vh",
            },

            [theme.breakpoints.only("mobile")]: {
                "display": "block",
                "height": "unset",
            },
        },
        "left": {
            "width": "75%",

            [theme.breakpoints.only('tablet')]: {
                "width": "unset",
                "height": "70%",
            },

            [theme.breakpoints.only("mobile")]: {
                "width": "unset",
                "height": theme.spacing(40),
            },
        },
        "right": {
            "flex": "1",
        },
        "heroText": {

            [theme.breakpoints.only('tablet')]: {
                "textAlign": "center",
            },

            [theme.breakpoints.only("mobile")]: {
                "textAlign": "center",
                "fontSize": theme.typography.h2.fontSize,
            },
        }
    }));