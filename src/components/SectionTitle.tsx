import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface Props {
    icon?: ReactNode;
    className?: string;
    classNames?: {
        container?: string;
        title?: string;
        icon?: string;
    };
    title: string;
}

const SectionTitle = ({ icon, title, className, classNames }: Props) => {
    return (
        <div
            className={cn(
                'flex items-center gap-4 mb-10',
                className,
                classNames?.container,
            )}
        >
            {icon ? (
                icon
            ) : (
                <span
                    className={cn(
                        'text-accent-green text-3xl animate-spin',
                        classNames?.icon,
                    )}
                    style={{ animationDuration: '7s' }}
                >
                    ✦
                </span>
            )}
            <h2
                className={cn(
                    'text-xl uppercase leading-none tracking-widest',
                    classNames?.title,
                )}
            >
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
