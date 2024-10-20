export interface TimeProps {
    date: string;
}
  
export const Times: React.FC<TimeProps> = ({ date }) => {
    return (
        <p className="date">{date}</p>
    );
};