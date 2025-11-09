import React from "react";
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
} from "@ionic/react";
import StatsCard from "../components/StatsCard";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart
} from "recharts";
import "./styles/Dashboard.css";
import Header from "../components/Topbar";

const data = [
  { name: "Mon", sales: 100, cost: 70 },
  { name: "Tue", sales: 120, cost: 80 },
  { name: "Wed", sales: 150, cost: 90 },
  { name: "Thu", sales: 170, cost: 120 },
  { name: "Fri", sales: 200, cost: 140 }
];

const Dashboard: React.FC = () => {
  return (
    <>
     <IonPage>
      <Header />
      <IonContent fullscreen className="bg-neutral-50 dark:bg-neutral-900">
        {/* <div className="hero">
          <div className="hero-inner">
            <h1>Hello Devs!</h1>
            <p>We are on a mission to help developers like you build successful projects for FREE.</p>
          </div>
        </div> */}

        <IonGrid className="dashboard-grid">
          <IonRow>
            <IonCol size="12" sizeMd="3"><StatsCard title="Total Sales" value="$560K" /></IonCol>
            <IonCol size="12" sizeMd="3"><StatsCard title="Total Profit" value="$185K" color="#06b6d4" /></IonCol>
            <IonCol size="12" sizeMd="3"><StatsCard title="Total Cost" value="$375K" /></IonCol>
            <IonCol size="12" sizeMd="3"><StatsCard title="Revenue" value="$742K" color="#34d399" /></IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="12" sizeLg="8">
              <IonCard className="chart-card">
                <div className="chart-header">
                  <h3>$855.8K</h3>
                  <p>Gross Sales <span className="small">This Week</span></p>
                </div>
                <div style={{ width: "100%", height: 340 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#4c7dff" stopOpacity={0.28}/>
                          <stop offset="95%" stopColor="#4c7dff" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10dc60" stopOpacity={0.22}/>
                          <stop offset="95%" stopColor="#10dc60" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="sales" stroke="#4c7dff" fillOpacity={1} fill="url(#colorSales)" />
                      <Area type="monotone" dataKey="cost" stroke="#10dc60" fillOpacity={1} fill="url(#colorCost)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </IonCard>
            </IonCol>

            <IonCol size="12" sizeLg="4">
              <IonCard className="card-3d">
                <div className="credit-card">
                  <div className="chip" />
                  <div className="card-number">5789 **** **** 2847</div>
                  <div className="card-holder">Mike Smith</div>
                  <div className="card-exp">06/11</div>
                </div>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
    </>
   
  );
};

export default Dashboard;
