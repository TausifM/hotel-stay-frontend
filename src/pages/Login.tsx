import {
  IonPage,
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
  IonText
} from "@ionic/react";
import { eye, eyeOff, logInOutline, logoGoogle, logoFacebook } from "ionicons/icons";
import { useState } from "react";
import "./styles/Login.css";
export default function Login() {
  const [showPass, setShowPass] = useState(false);

  return (
    <IonPage className="login-page">
      <IonContent fullscreen className="login-bg">

        <div className="glass-card">
          <h1 className="title">Welcome Back 👋</h1>
          <p className="subtitle">Login to continue</p>

          <IonItem className="input-item">
            <IonLabel position="floating">Email</IonLabel>
            <IonInput type="email" />
          </IonItem>

          <IonItem className="input-item">
            <IonLabel position="floating">Password</IonLabel>
            <IonInput type={showPass ? "text" : "password"} />
            <IonIcon
              icon={showPass ? eyeOff : eye}
              slot="end"
              className="password-toggle"
              onClick={() => setShowPass(!showPass)}
            />
          </IonItem>

          <IonButton expand="block" shape="round" className="login-btn">
            <IonIcon icon={logInOutline} slot="start" />
            Login
          </IonButton>

          <IonText className="forgot">Forgot Password?</IonText>

          <div className="divider"><span>OR</span></div>

          <div className="social-login">
            <IonButton fill="outline" shape="round">
              <IonIcon icon={logoGoogle} slot="start" />
              Google
            </IonButton>

            <IonButton fill="outline" shape="round" color="primary">
              <IonIcon icon={logoFacebook} slot="start" />
              Facebook
            </IonButton>
          </div>

          <p className="register-text">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </div>

      </IonContent>
    </IonPage>
  );
}
