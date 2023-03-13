import * as React from "react"

const Degradado1 = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 74.14 74.14" {...props}>
        <defs>
            <radialGradient
                id="qqqq"
                cx={-65.38}
                cy={66.98}
                fx={-65.38}
                fy={66.98}
                r={338.57}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.14} stopColor="#6ced00" />
                <stop offset={0.16} stopColor="#63e513" />
                <stop offset={0.23} stopColor="#46c859" />
                <stop offset={0.3} stopColor="#2db094" />
                <stop offset={0.36} stopColor="#199ec2" />
                <stop offset={0.42} stopColor="#0b91e3" />
                <stop offset={0.46} stopColor="#0388f7" />
                <stop offset={0.5} stopColor="#0086ff" />
                <stop offset={0.54} stopColor="#0081f5" />
                <stop offset={0.61} stopColor="#0275db" />
                <stop offset={0.7} stopColor="#0660b2" />
                <stop offset={0.81} stopColor="#0b4478" />
                <stop offset={0.93} stopColor="#11212f" />
                <stop offset={0.97} stopColor="#141414" />
            </radialGradient>
        </defs>
        <circle
            cx={37.07}
            cy={37.07}
            r={37.07}
            style={{
                fill: "url(#qqqq)",
            }}
        />
    </svg>
)

export default Degradado1
