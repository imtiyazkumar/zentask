/**
 * Zentask
 *
 * @author      Imtiyaz Ahmad
 * @link        https://github.com/imtiyazkumar/zentask
 * @license     MIT
 * @copyright   2023 Imtiyaz Ahmad
 */

import { cn } from '../../utils/helper';

interface DivProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
interface SpanProps extends React.HTMLAttributes<HTMLSpanElement> {}
interface ImgProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
interface LabelProps extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {}
interface TableProps extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> {}

export const Div: React.FC<DivProps> = ({ children, ...props }) => <div {...props}>{children}</div>;

export const Span: React.FC<SpanProps> = ({ children, ...props }) => <span {...props}>{children}</span>;

export const Label: React.FC<LabelProps> = ({ children, ...props }) => <label {...props}>{children}</label>;

export const Img: React.FC<ImgProps> = (props) => <img {...props} />;

export const BaseTable: React.FC<TableProps> = ({ children, ...props }) => <table {...props}>{children}</table>;

export const Flex: React.FC<DivProps> = ({ className, children, ...props }) => {
    return (
        <div {...props} className={cn("flex items-center", className)}>
            {children}
        </div>
    );
};

export const FlexColumn: React.FC<DivProps> = ({ className, children, ...props }) => {
    return (
        <div {...props} className={cn("flex flex-col justify-center", className)}>
            {children}
        </div>
    );
};
