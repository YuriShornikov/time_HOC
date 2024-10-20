import moment from 'moment';
import { TimeProps } from '../TimesProps/TimesProps';

export const TheTimes = <P extends TimeProps>(Component: React.ComponentType<P>) => {
    return function EnhancedComponent(props: P) {
        const formattedDate = formatDate(props.date);
        return <Component {...props} date={formattedDate} />;
    };
};

function formatDate(date: string): string {
    const now = moment();
    const time = moment(date);

    const diffMinutes = now.diff(time, 'minutes');
    const diffHours = now.diff(time, 'hours');
    const diffDays = now.diff(time, 'days');

    if (diffMinutes < 60) {
        return `${diffMinutes} минут назад`;
    } else if (diffHours < 24) {
        return `${diffHours} часов назад`;
    } else {
        return `${diffDays} дней назад`;
    }
}
