import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import ErrorAlert from "../../components/ui/error-alert";

const FilteredEventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p>Loading...</p>;
  }
  let month = filterData[1];
  let year = filterData[0];

  month = +month;
  year = +year;

  if (
    isNaN(month) ||
    isNaN(year) ||
    year > 2030 ||
    year < 2021 ||
    month < 1 ||
    month > 12
  ) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter.Please adjust your value !</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const events = getFilteredEvents({
    year,
    month,
  });
  if (!events || events.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  const date = new Date(year, month - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList events={events} />
    </>
  );
};

export default FilteredEventsPage;
