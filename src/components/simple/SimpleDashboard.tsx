import React from 'react';
import { SimpleMap } from './SimpleMap';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Recycle, MapPin, Users, AlertTriangle } from 'lucide-react';

export const SimpleDashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <Card className="bg-gradient-data border-0 rounded-none shadow-card">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-health flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-foreground">
                    Urban Health & Waste Accessibility Dashboard
                  </h1>
                  <p className="text-muted-foreground">
                    Data-Driven Insights for Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Badge variant="secondary" className="bg-dashboard-health/20 text-dashboard-health border-dashboard-health/30">
                <Activity className="w-3 h-3 mr-1" />
                Health Access
              </Badge>
              <Badge variant="secondary" className="bg-dashboard-waste/20 text-dashboard-waste border-dashboard-waste/30">
                <Recycle className="w-3 h-3 mr-1" />
                Waste Management
              </Badge>
            </div>
          </div>
        </div>
      </Card>

      {/* Main Content */}
      <div className="flex-1 flex">
        {/* Map */}
        <div className="flex-1 relative">
          <SimpleMap />
        </div>

        {/* Side Panel */}
        <div className="w-96 bg-card border-l border-border flex-shrink-0">
          <div className="p-4 border-b border-border">
            <h2 className="text-lg font-semibold text-foreground">Dashboard Analytics</h2>
            <p className="text-sm text-muted-foreground">Key insights for urban planning</p>
          </div>
          
          <div className="p-4 space-y-4">
            {/* Stats Cards */}
            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-foreground flex items-center space-x-2">
                  <Users className="w-4 h-4 text-accent" />
                  <span>Population Metrics</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Population</span>
                  <span className="text-sm font-medium text-foreground">2.15M</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Hospital Underserved</span>
                  <Badge variant="destructive" className="text-xs">15.1%</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Waste Underserved</span>
                  <Badge variant="destructive" className="text-xs">13.3%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-foreground flex items-center space-x-2">
                  <Activity className="w-4 h-4 text-dashboard-health" />
                  <span>Healthcare Access</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Active Hospitals</span>
                  <span className="text-sm font-medium text-foreground">6</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg Distance</span>
                  <span className="text-sm font-medium text-foreground">1.2km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Coverage</span>
                  <Badge variant="secondary" className="bg-dashboard-health/20 text-dashboard-health">84.9%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-foreground flex items-center space-x-2">
                  <Recycle className="w-4 h-4 text-dashboard-waste" />
                  <span>Waste Management</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Collection Points</span>
                  <span className="text-sm font-medium text-foreground">5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Avg Distance</span>
                  <span className="text-sm font-medium text-foreground">0.4km</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Coverage</span>
                  <Badge variant="secondary" className="bg-dashboard-waste/20 text-dashboard-waste">86.7%</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader className="pb-3">
                <CardTitle className="text-sm text-foreground flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4 text-dashboard-heat" />
                  <span>Environmental Risks</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Heat Islands</span>
                  <Badge variant="destructive" className="text-xs">High Risk</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Flood Zones</span>
                  <Badge variant="secondary" className="bg-dashboard-flood/20 text-dashboard-flood">Medium</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Risk Overlap</span>
                  <span className="text-sm font-medium text-foreground">67%</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};