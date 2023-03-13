import * as React from "react"

const IconBNK = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 328.89 328.89"
        {...props} className='animate__animated animate__fadeIn'
    >
        <defs>
            <linearGradient
                id="producto3"
                x1={41.8}
                y1={41.8}
                x2={312.71}
                y2={312.71}
                gradientUnits="userSpaceOnUse"
            >
                <stop offset={0.18} stopColor="#8ee947" />
                <stop offset={0.26} stopColor="#89e34f" />
                <stop offset={0.4} stopColor="#7ed667" />
                <stop offset={0.57} stopColor="#6bbf8d" />
                <stop offset={0.77} stopColor="#52a0c2" />
                <stop offset={0.94} stopColor="#3a83f6" />
            </linearGradient>
        </defs>
        <path
            d="M328.89 82.22C328.89 37 291.89 0 246.67 0h-82.22v164.45H0v82.22c0 45.22 37 82.22 82.22 82.22 45.21 0 82.2-36.98 82.22-82.19v82.19h82.22c45.22 0 82.22-37 82.22-82.22s-37-82.22-82.22-82.22c45.22 0 82.22-37 82.22-82.22Z"
            style={{
                fill: "url(#producto3)",
            }}
        />
        <circle
            cx={82.22}
            cy={82.22}
            r={82.22}
            style={{
                fill: "#f1f1f1",
            }}
        />
    </svg>
)

export default IconBNK