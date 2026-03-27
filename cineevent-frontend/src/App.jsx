import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import EventDetailsPage from "./pages/EventDetailsPage";
import EventsPage from "./pages/EventsPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import GuestReservationPage from "./pages/GuestReservationPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NotFoundPage from "./pages/NotFoundPage";
import OrganizerRegistrationPage from "./pages/OrganizerRegistrationPage";
import SpectatorRegistrationPage from "./pages/SpectatorRegistrationPage";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:eventId" element={<EventDetailsPage />} />
        <Route
          path="/organizer-registration"
          element={<OrganizerRegistrationPage />}
        />
        
        <Route path="*" element={<NotFoundPage />} />
      </Route>
      <Route path="/signup" element={<SpectatorRegistrationPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route
        path="/events/:eventId/reserve"
        element={<GuestReservationPage />}
      />
    </Routes>
  );
}
