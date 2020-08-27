import React from 'react'
import { Switch } from 'react-router-dom'
import { loadRoutes } from './helpers'

// Features Routes
import landingRoutes from 'features/landing/landingRoutes'
import authRoutes from 'features/auth/authRoutes'
import userRoutes from 'features/dashboard/features/users/userRoutes'

const Routes = () => {
  return (
    <Switch>
			{loadRoutes(landingRoutes)}
			{loadRoutes(authRoutes)}
			{loadRoutes(userRoutes)}
    </Switch>
  );
}

export default Routes