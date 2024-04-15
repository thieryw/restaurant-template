import { tss } from 'tss-react/mui'
import Fade from "@mui/material/Fade"

import { AboutDetail } from "./AboutDetail"
import { HeroSection } from "components/HeroSection"
import backgroundImageUrl from "assets/resto4.webp"
import { declareComponentKeys } from "i18nifty"
import { useTranslation } from "i18n"


type PropsAbout = {
    className?: string;
    onChangePage: (page: SelectedPage) => void;
}

type SelectedPage = "home" | "menu" | "about" | "reservation"

export function About(props: PropsAbout) {

    const { cx, classes } = useStyles()

    const { onChangePage } = props

    const { t } = useTranslation({ About })

    return (
        <Fade
            in={true}
            timeout={800}
        >
            <div className={cx(classes.root)}>
                <HeroSection
                    selectedPage='about'
                    className={classes.left}
                    onChangePage={onChangePage}
                    backgroundImageUrl={backgroundImageUrl}
                    heroText={
                        <>
                            {t("about")}
                        </>
                    }
                />
                <AboutDetail className={classes.right} />
            </div>
        </Fade>
    )
}

const useStyles = tss
    .withName({ About })
    .create(({ theme }) => ({
        "root": {
            "display": "flex",
            "gap": theme.spacing(2),
            "padding": theme.spacing(2),
            "height": "100%",
            "boxSizing": "border-box",

            [theme.breakpoints.down('desktop')]: {
                "display": "block",
                "overflow": "auto",
            },
        },
        "left": {
            "width": "60%",

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
            "flex": 1,
        }
    }));

export const { i18n } = declareComponentKeys<
    | "about"
>()({ About });