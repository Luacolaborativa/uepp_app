import React from 'react';

interface ContentHeaderProps {
    title: string;
    subtitle: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="content-header p-3 bg-slate-400 flex flex-row items-baseline gap-5">
            <h3 className='text-2xl'>{title}</h3>
            <h4 className='text-md'>{subtitle}</h4>
        </div>
    );
};

export default ContentHeader;