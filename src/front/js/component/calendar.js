import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Scheduler, { Resource } from "devextreme-react/scheduler";
import "devextreme/dist/css/dx.light.css";

export const Calendar = (props) => {
  const { store, actions } = useContext(Context);
  const currentDate = new Date();
  const views = ["week", "month"];

  return (
    <div className="container-fluid">
      <Scheduler
        timeZone="America/Los_Angeles"
        dataSource={store.calendarEntries}
        views={views}
        defaultCurrentView="week"
        defaultCurrentDate={currentDate}
        height={600}
        startDayHour={9}
      >
        {/* Configuration goes here */}
      </Scheduler>
    </div>
  );
};

Calendar.propTypes = {
  match: PropTypes.object,
};
