import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Button,
  Chip,
  Box 
} from '@mui/material';
import { useAuth } from '../features/auth/hooks/useAuth';

export const DashboardPage: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">
              AI SaaS Dashboard
            </h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-700">
                Welcome, {user?.name}!
              </span>
              <Button
                variant="outlined"
                size="small"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
                          gap-6 mb-8">
            {/* MUI Card with Tailwind classes */}
            <Card className="shadow-lg">
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  User Profile
                </Typography>
                <Box className="space-y-2">
                  <Chip 
                    label={`ID: ${user?.id}`} 
                    variant="outlined" 
                    size="small" 
                  />
                  <Typography variant="body2" className="text-gray-600">
                    Email: {user?.email}
                  </Typography>
                  <Chip 
                    label={user?.role} 
                    color="primary" 
                    size="small" 
                  />
                </Box>
              </CardContent>
            </Card>

            {/* Tailwind Card */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Quick Actions
              </h3>
              <div className="space-y-3">
                <Button 
                  variant="contained" 
                  fullWidth
                  className="bg-blue-600 hover:bg-blue-700"
                >
                  New Project
                </Button>
                <Button 
                  variant="outlined" 
                  fullWidth
                  className="border-gray-300 text-gray-700"
                >
                  View Analytics
                </Button>
              </div>
            </div>

            {/* Mixed styling */}
            <Card className="shadow-lg bg-gradient-to-r 
                            from-blue-50 to-indigo-50">
              <CardContent>
                <Typography variant="h6" component="h3" gutterBottom>
                  Welcome Message
                </Typography>
                <Typography variant="body2" className="text-gray-700 mb-4">
                  This demonstrates both MUI components and Tailwind CSS 
                  working together seamlessly.
                </Typography>
                <div className="flex flex-wrap gap-2">
                  <Chip label="MUI" color="primary" size="small" />
                  <Chip label="Tailwind" color="secondary" size="small" />
                  <Chip label="React" color="success" size="small" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="border-4 border-dashed border-gray-200 
                          rounded-lg h-96 flex items-center justify-center">
            <div className="text-center">
              <Typography variant="h4" component="h2" className="mb-4">
                🎉 Success!
              </Typography>
              <Typography variant="body1" className="text-gray-600 mb-4">
                Both MUI and Tailwind CSS are working perfectly together!
              </Typography>
              <div className="space-x-2">
                <Chip label="Material UI ✓" color="primary" />
                <Chip label="Tailwind CSS ✓" color="secondary" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
