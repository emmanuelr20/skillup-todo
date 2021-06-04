import React from 'react'
import ContentLoader from 'react-content-loader'

export default function TodoLoader() {
    return (
        <ContentLoader
        backgroundColor={'#bbbbbb'}
        foregroundColor={'#cccccc'}

        viewBox="0 0 380 200">
            {/* Only SVG shapes */}    
            <rect x="0" y="0" rx="3" ry="3" width="380" height="20" />
            <rect x="0" y="30" rx="3" ry="3" width="380" height="20" />
            <rect x="0" y="60" rx="3" ry="3" width="380" height="20" />
            <rect x="0" y="90" rx="3" ry="3" width="380" height="20" />
            <rect x="0" y="120" rx="3" ry="3" width="380" height="20" />
            <rect x="0" y="150" rx="3" ry="3" width="380" height="20" />
            <rect x="0" y="180" rx="3" ry="3" width="380" height="20" />
        </ContentLoader>
    )
}
