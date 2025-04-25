import React from 'react'

const Title = ({ title, title2 }) => {
    return (
        <div>
            <h1 className="font-semibold text-4xl mb-4 text-green-500">
                <span className="block">{title}</span>
                <span className="block">{title2}</span>
            </h1>
        </div>
    )
}

export default Title

