import React from 'react';

interface ContentHeaderProps {
    title: string;
    subtitle: string;
}

const ContentHeader: React.FC<ContentHeaderProps> = ({ title, subtitle }) => {
    return (
        <div className="content-header p-3 bg-slate-200 flex flex-row items-baseline gap-5 rounded-lg shadow text-slate-700 my-3 border-l-4 border-slate-700">
            <h3 className='text-2xl font-bold'>{title}</h3>
            <p className='text-md'>{subtitle}</p>
        </div>
    );
};

export default ContentHeader;