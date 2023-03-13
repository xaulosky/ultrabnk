import * as React from "react"

const Degradado2 = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.14 74.14" {...props}>
        <defs>
            <radialGradient
                id="adasdasdasd"
                cx={-11.78}
                cy={86.18}
                fx={-11.78}
                fy={86.18}
                r={137.25}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0} stopColor="#4d4d4d" />
                <stop offset={0.2} stopColor="#474747" />
                <stop offset={0.46} stopColor="#383838" />
                <stop offset={0.74} stopColor="#1e1e1e" />
                <stop offset={1} />
            </radialGradient>
        </defs>
        <circle
            cx={37.07}
            cy={37.07}
            r={37.07}
            style={{
                fill: "url(#adasdasdasd)",
            }}
        />
    </svg>
)

export default Degradado2
