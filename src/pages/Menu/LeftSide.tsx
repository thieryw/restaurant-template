//import { darkTheme } from "../../theme"
import { tss } from 'tss-react/mui'
import { MenuBar } from '../../components/MenuBar';

import backgroundImage from "../../assets/food-nem.webp"


type PropsLeftSide = {
    className?: string;
}

export function LeftSide(props: PropsLeftSide) {

    const { className } = props
    const { cx, classes } = useStyles()

    return (
        <div className={cx(classes.root, className)}>

            <MenuBar />

            <div>
                <h1 className={cx(classes.h1)}>
                    Menu
                </h1>
            </div>

        </div >
    )
}

const useStyles = tss
    .create(({ theme }) => ({
        "root": {
            "boxSizing": "border-box",
            "display": "flex",
            "flexDirection": "column",
            "justifyContent": "space-between",
            "background": `url(${backgroundImage}) center center/cover`,
            "borderRadius": "20px",
            "padding": "30px 50px 30px 50px",
        },
        "h1": {
            "fontFamily": theme.typography.fontFamily,
            "color": theme.palette.text.primary,
            "fontSize": theme.typography.h1.fontSize,
            "fontWeight": theme.typography.h1.fontWeight,
            "margin": "0",
        }
    }))