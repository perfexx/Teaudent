import React from "react";
import "./home.css";
import CourseInfo from "../../components/courseInfo/CourseInfo";
import Chart from "../../components/chart/Chart";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import CommingEvents from "../../components/events/CommingEvents";

export default function Home() {
  return (
    <div className="home">
      <CourseInfo />
      <CommingEvents />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
