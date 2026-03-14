import React, { useState } from "https://esm.sh/react@18.2.0";
import { createRoot } from "https://esm.sh/react-dom@18.2.0/client";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from "https://esm.sh/recharts@2.12.2?deps=react@18.2.0,react-dom@18.2.0";
import {
  Camera, Upload, Image, BarChart3, Users, Settings, Home, Store, MapPin,
  CheckCircle, AlertTriangle, Clock, ChevronRight, ChevronLeft, Search, Bell,
  Filter, Download, Eye, TrendingUp, Package, ShieldCheck, Layers, Grid,
  LogOut, Menu, X, Plus, Star, Navigation, Wifi, WifiOff, RefreshCw, Zap,
  Target, Award, FileText, Calendar, ArrowUp, ArrowDown, MoreVertical, Check,
  Maximize, ZoomIn, Smartphone, Monitor
} from "https://esm.sh/lucide-react@0.358.0?deps=react@18.2.0";

function ShelfVisionWireframe() {
  const [isMobileView, setIsMobileView] = useState(true);
  const [mobileScreen, setMobileScreen] = useState("login");
  const [adminScreen, setAdminScreen] = useState("dashboard");
  const [selectedStore, setSelectedStore] = useState(null);
  const [capturedCount, setCapturedCount] = useState(3);
  const [uploadProgress, setUploadProgress] = useState(67);
  const [stitchProgress, setStitchProgress] = useState(67);

  // Mock data
  const storeData = [
    { id: 1, name: "Downtown Market", address: "123 Main St", compliance: 94, status: "completed", lastVisit: "2h ago" },
    { id: 2, name: "Central Plaza", address: "456 Oak Ave", compliance: 87, status: "in-progress", lastVisit: "12m ago" },
    { id: 3, name: "Westside Store", address: "789 Pine Rd", compliance: 76, status: "pending", lastVisit: "1d ago" },
    { id: 4, name: "North Point", address: "321 Elm St", compliance: 91, status: "completed", lastVisit: "3h ago" },
  ];

  const complianceTrendData = [
    { day: "Mon", compliance: 88 },
    { day: "Tue", compliance: 90 },
    { day: "Wed", compliance: 87 },
    { day: "Thu", compliance: 92 },
    { day: "Fri", compliance: 91 },
    { day: "Sat", compliance: 89 },
    { day: "Sun", compliance: 94 },
  ];

  const visitsByRegionData = [
    { region: "North", visits: 35 },
    { region: "South", visits: 28 },
    { region: "East", visits: 42 },
    { region: "West", visits: 37 },
  ];

  const shareOfShelfData = [
    { name: "Brand A", value: 35 },
    { name: "Brand B", value: 25 },
    { name: "Brand C", value: 20 },
    { name: "Others", value: 20 },
  ];

  const colors = ["#3B82F6", "#10B981", "#F59E0B", "#8B5CF6"];

  const teamData = [
    { id: 1, name: "Alex Johnson", territory: "North", visitsToday: 4, compliance: 94, status: "online" },
    { id: 2, name: "Sarah Chen", territory: "East", visitsToday: 6, compliance: 89, status: "online" },
    { id: 3, name: "Mike Davis", territory: "South", visitsToday: 3, compliance: 76, status: "offline" },
    { id: 4, name: "Emma Wilson", territory: "West", visitsToday: 5, compliance: 91, status: "online" },
    { id: 5, name: "James Brown", territory: "Central", visitsToday: 2, compliance: 85, status: "offline" },
  ];

  // ==================== MOBILE APP SCREENS ====================

  const MobileLoginScreen = () => (
    <div className="h-full flex flex-col bg-gradient-to-b from-blue-50 to-white p-6">
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
          <Camera className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">ShelfVision</h1>
        <p className="text-sm text-gray-500 mb-12">Retail Image Recognition</p>

        <div className="w-full space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={() => setMobileScreen("dashboard")}
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition"
          >
            Sign In
          </button>
        </div>

        <button className="mt-6 text-blue-600 text-sm font-medium hover:text-blue-700">
          Sign in with Face ID
        </button>

        <button className="mt-4 text-blue-600 text-sm hover:text-blue-700">
          Forgot Password?
        </button>
      </div>
    </div>
  );

  const MobileDashboardScreen = () => (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h2 className="text-lg font-bold text-gray-900">Good Morning, Alex</h2>
            <p className="text-xs text-gray-500">Friday, March 14, 2025</p>
          </div>
          <div className="flex gap-2">
            <Wifi className="w-5 h-5 text-green-500" />
            <Bell className="w-5 h-5 text-gray-400" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="bg-blue-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-blue-600">8</p>
            <p className="text-xs text-gray-600">Visits Today</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-green-600">3</p>
            <p className="text-xs text-gray-600">Completed</p>
          </div>
          <div className="bg-amber-50 rounded-lg p-3 text-center">
            <p className="text-2xl font-bold text-amber-600">92%</p>
            <p className="text-xs text-gray-600">Compliance</p>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <Clock className="w-4 h-4" /> Today's Route
          </h3>
          <div className="space-y-2">
            {storeData.map((store) => (
              <div
                key={store.id}
                onClick={() => {
                  setSelectedStore(store);
                  setMobileScreen("storeDetail");
                }}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition cursor-pointer"
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm">{store.name}</h4>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      store.status === "completed"
                        ? "bg-green-100 text-green-700"
                        : store.status === "in-progress"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {store.status === "in-progress" ? "In Progress" : store.status === "completed" ? "✓ Done" : "Pending"}
                  </span>
                </div>
                <p className="text-xs text-gray-600 flex items-center gap-1 mb-2">
                  <MapPin className="w-3 h-3" /> {store.address}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">Last visit: {store.lastVisit}</span>
                  <div className="flex items-center gap-1">
                    <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${store.compliance}%` }}
                      />
                    </div>
                    <span className="text-xs font-semibold text-gray-700">{store.compliance}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <button
            onClick={() => setMobileScreen("capture")}
            className="bg-white rounded-lg p-3 flex flex-col items-center gap-2 border border-gray-200 hover:shadow-md transition"
          >
            <Camera className="w-6 h-6 text-blue-600" />
            <span className="text-xs font-semibold text-gray-900">Capture</span>
          </button>
          <button
            onClick={() => setMobileScreen("stitching")}
            className="bg-white rounded-lg p-3 flex flex-col items-center gap-2 border border-gray-200 hover:shadow-md transition"
          >
            <Layers className="w-6 h-6 text-purple-600" />
            <span className="text-xs font-semibold text-gray-900">Stitch</span>
          </button>
          <button
            onClick={() => setMobileScreen("analytics")}
            className="bg-white rounded-lg p-3 flex flex-col items-center gap-2 border border-gray-200 hover:shadow-md transition"
          >
            <BarChart3 className="w-6 h-6 text-amber-600" />
            <span className="text-xs font-semibold text-gray-900">Reports</span>
          </button>
        </div>
      </div>

      {/* Mobile Bottom Tab Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 mx-auto" style={{ maxWidth: "375px" }}>
        <div className="flex justify-around items-center">
          <button
            onClick={() => setMobileScreen("dashboard")}
            className={`flex-1 py-3 flex flex-col items-center gap-1 ${
              mobileScreen === "dashboard"
                ? "text-blue-600 border-t-2 border-blue-600"
                : "text-gray-400"
            }`}
          >
            <Home className="w-5 h-5" />
            <span className="text-xs">Home</span>
          </button>
          <button
            onClick={() => setMobileScreen("stores")}
            className={`flex-1 py-3 flex flex-col items-center gap-1 ${
              mobileScreen === "stores"
                ? "text-blue-600 border-t-2 border-blue-600"
                : "text-gray-400"
            }`}
          >
            <Store className="w-5 h-5" />
            <span className="text-xs">Stores</span>
          </button>
          <button
            onClick={() => setMobileScreen("capture")}
            className={`flex-1 py-3 flex flex-col items-center gap-1 ${
              mobileScreen === "capture"
                ? "text-blue-600 border-t-2 border-blue-600"
                : "text-gray-400"
            }`}
          >
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center -mt-2">
              <Camera className="w-5 h-5 text-white" />
            </div>
            <span className="text-xs">Capture</span>
          </button>
          <button
            onClick={() => setMobileScreen("analytics")}
            className={`flex-1 py-3 flex flex-col items-center gap-1 ${
              mobileScreen === "analytics"
                ? "text-blue-600 border-t-2 border-blue-600"
                : "text-gray-400"
            }`}
          >
            <TrendingUp className="w-5 h-5" />
            <span className="text-xs">Analytics</span>
          </button>
          <button
            onClick={() => setMobileScreen("profile")}
            className={`flex-1 py-3 flex flex-col items-center gap-1 ${
              mobileScreen === "profile"
                ? "text-blue-600 border-t-2 border-blue-600"
                : "text-gray-400"
            }`}
          >
            <Users className="w-5 h-5" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );

  const MobileStoresScreen = () => (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Stores</h2>
        <div className="relative mb-3">
          <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search stores..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto">
          {["All", "Pending", "Completed", "Flagged"].map((filter) => (
            <button
              key={filter}
              className="px-3 py-1 text-xs font-semibold rounded-full border border-gray-300 hover:bg-gray-100 whitespace-nowrap"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3 pb-24">
        {storeData.map((store) => (
          <div
            key={store.id}
            onClick={() => {
              setSelectedStore(store);
              setMobileScreen("storeDetail");
            }}
            className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition cursor-pointer"
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-semibold text-gray-900">{store.name}</h4>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-xs text-gray-600 flex items-center gap-1 mb-3">
              <MapPin className="w-3 h-3" /> {store.address}
            </p>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Compliance</span>
              <div className="flex items-center gap-2">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      store.compliance >= 90
                        ? "bg-green-500"
                        : store.compliance >= 80
                        ? "bg-blue-500"
                        : "bg-amber-500"
                    }`}
                    style={{ width: `${store.compliance}%` }}
                  />
                </div>
                <span className="font-semibold text-gray-700 w-8">{store.compliance}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const MobileStoreDetailScreen = () => (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <button
          onClick={() => setMobileScreen("stores")}
          className="flex items-center gap-2 text-blue-600 mb-3"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-semibold">Back</span>
        </button>
        <h2 className="text-lg font-bold text-gray-900">{selectedStore?.name}</h2>
        <p className="text-xs text-gray-600 flex items-center gap-1 mt-1">
          <MapPin className="w-3 h-3" /> {selectedStore?.address}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-gray-900">Visit Timer</span>
            <span className="text-2xl font-bold text-blue-600">12:45</span>
          </div>
          <p className="text-xs text-gray-600">Started 12 minutes ago</p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3">Visit Checklist</h3>
          <div className="space-y-2">
            {[
              "Check shelf displays",
              "Capture planogram images",
              "Verify pricing",
              "Check promotions",
              "Record competitor activity",
            ].map((item, idx) => (
              <label key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3 cursor-pointer hover:bg-gray-50">
                <input type="checkbox" className="w-4 h-4 rounded text-blue-600" defaultChecked={idx < 2} />
                <span className="text-sm text-gray-700">{item}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          onClick={() => setMobileScreen("capture")}
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition flex items-center justify-center gap-2"
        >
          <Camera className="w-4 h-4" /> Capture Shelf Images
        </button>

        <div>
          <h3 className="font-semibold text-gray-900 mb-2 text-sm">Previous Visit Images</h3>
          <div className="flex gap-2 overflow-x-auto">
            {[1, 2, 3].map((img) => (
              <div key={img} className="w-20 h-20 bg-gray-300 rounded-lg flex-shrink-0" />
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-900 block mb-2">Visit Notes</label>
          <textarea
            placeholder="Add notes about this visit..."
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            rows="4"
          />
        </div>
      </div>
    </div>
  );

  const MobileCaptureScreen = () => (
    <div className="h-full flex flex-col bg-gray-900 relative">
      <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
        <button onClick={() => setMobileScreen("dashboard")} className="text-white">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h2 className="text-white font-semibold text-sm">Shelf Capture</h2>
        <div className="text-white text-xs font-semibold bg-blue-600 px-2 py-1 rounded">
          {capturedCount} of 6
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center relative">
        <div className="w-full h-96 bg-gradient-to-b from-gray-800 to-gray-900 relative flex items-center justify-center border-2 border-dashed border-blue-400 rounded-lg">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-48 border-2 border-blue-400 rounded-lg" />
          </div>
          <p className="text-gray-400 text-sm text-center">Align shelf within guides</p>
        </div>

        <div className="absolute top-32 left-6 text-gray-500 text-xs">Quality: Good</div>
      </div>

      <div className="bg-gray-800 border-t border-gray-700 p-6 flex justify-between items-center">
        <button className="text-gray-300 hover:text-white">
          <Image className="w-6 h-6" />
        </button>
        <button
          onClick={() => {
            setCapturedCount((c) => Math.min(c + 1, 6));
          }}
          className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue
