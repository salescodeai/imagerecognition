import { useState } from "react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis,
  CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area
} from "recharts";
import {
  Camera, Upload, Image, BarChart3, Users, Settings, Home, Store, MapPin,
  CheckCircle, AlertTriangle, Clock, ChevronRight, ChevronLeft, Search, Bell,
  Filter, Download, Eye, TrendingUp, Package, ShieldCheck, Layers, Grid,
  LogOut, Menu, X, Plus, Star, Navigation, Wifi, WifiOff, RefreshCw, Zap,
  Target, Award, FileText, Calendar, ArrowUp, ArrowDown, MoreVertical, Check,
  Maximize, ZoomIn, Smartphone, Monitor
} from "lucide-react";

export default function ShelfVisionWireframe() {
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
          className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition shadow-lg"
        >
          <div className="w-14 h-14 bg-blue-500 rounded-full" />
        </button>
        <button className="text-gray-300 hover:text-white">
          <Zap className="w-6 h-6" />
        </button>
      </div>
    </div>
  );

  const MobileStitchingScreen = () => (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <button
          onClick={() => setMobileScreen("dashboard")}
          className="flex items-center gap-2 text-blue-600 mb-3"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="text-sm font-semibold">Back</span>
        </button>
        <h2 className="text-lg font-bold text-gray-900">Shelf Stitching</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Images to Stitch</h3>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((img) => (
              <div key={img} className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg shadow-md" />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-900">Stitching Progress</span>
            <span className="text-sm font-bold text-blue-600">{stitchProgress}%</span>
          </div>
          <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all"
              style={{ width: `${stitchProgress}%` }}
            />
          </div>
          <p className="text-xs text-gray-600 mt-2">Stitching 67% complete...</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Panorama Preview</h3>
          <div className="w-full h-48 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg border-2 border-blue-300 flex items-center justify-center">
            <p className="text-gray-500 text-sm">Stitched panorama preview</p>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <p className="text-xs text-blue-900">
            💡 <strong>Tip:</strong> Ensure 20-30% overlap between images for better stitching.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button className="py-3 bg-white border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition">
            Add More Images
          </button>
          <button className="py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition">
            Complete Stitch
          </button>
        </div>
      </div>
    </div>
  );

  const MobileUploadScreen = () => (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Gallery</h2>
        <div className="flex gap-2">
          <button className="text-xs px-3 py-1 rounded-full border border-gray-300 font-semibold hover:bg-gray-100">
            All
          </button>
          <button className="text-xs px-3 py-1 rounded-full border border-gray-300 font-semibold hover:bg-gray-100">
            Uploaded
          </button>
          <button className="text-xs px-3 py-1 rounded-full border border-gray-300 font-semibold hover:bg-gray-100">
            Processing
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 pb-20">
        <div className="grid grid-cols-2 gap-3 mb-4">
          {[1, 2, 3, 4, 5, 6].map((img) => (
            <div key={img} className="relative group">
              <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg" />
              <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-semibold">
                {img <= 3 ? "Uploaded" : "Processing"}
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-lg transition flex items-center justify-center">
                <Eye className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-semibold text-gray-900">Upload Progress</span>
            <span className="text-sm font-bold text-blue-600">{uploadProgress}%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${uploadProgress}%` }}
            />
          </div>
        </div>

        <button className="w-full py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg hover:shadow-lg transition">
          Upload All
        </button>
      </div>
    </div>
  );

  const MobileAnalysisScreen = () => (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <h2 className="text-lg font-bold text-gray-900">Analysis Results</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
        <div className="aspect-video bg-gradient-to-br from-gray-300 to-gray-400 rounded-lg" />

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-2">SKU Detection</h3>
          <div className="flex justify-between items-baseline">
            <span className="text-2xl font-bold text-blue-600">47</span>
            <span className="text-xs text-gray-600">SKUs Detected | 94% Accuracy</span>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Share of Shelf</h3>
          <div className="space-y-2">
            {[
              { name: "Brand A", percent: 35, color: "bg-blue-500" },
              { name: "Brand B", percent: 25, color: "bg-green-500" },
              { name: "Brand C", percent: 20, color: "bg-amber-500" },
              { name: "Others", percent: 20, color: "bg-purple-500" },
            ].map((brand) => (
              <div key={brand.name}>
                <div className="flex justify-between items-center text-xs mb-1">
                  <span className="font-semibold text-gray-900">{brand.name}</span>
                  <span className="text-gray-600">{brand.percent}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className={`h-full ${brand.color}`} style={{ width: `${brand.percent}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-semibold text-gray-900">Compliance Score</h3>
            <span className="text-3xl font-bold text-green-600">87%</span>
          </div>
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-green-500" style={{ width: "87%" }} />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-red-500" /> Out of Stock
          </h3>
          <div className="space-y-2">
            {["Competitor Product A", "Brand C Variant", "Promotional Item"].map((item, idx) => (
              <div key={idx} className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-xs font-semibold text-red-900">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-sm font-semibold text-gray-900">Price Accuracy</span>
            <span className="text-lg font-bold text-green-600">96%</span>
          </div>
        </div>
      </div>
    </div>
  );

  const MobileAnalyticsScreen = () => (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4 sticky top-0 z-10">
        <h2 className="text-lg font-bold text-gray-900 mb-3">Analytics</h2>
        <div className="flex gap-2">
          {["Today", "Week", "Month"].map((period) => (
            <button
              key={period}
              className="text-xs px-3 py-1 rounded-full border border-gray-300 font-semibold hover:bg-blue-50 hover:border-blue-300"
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Visits</p>
            <p className="text-2xl font-bold text-blue-600">24</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Compliance</p>
            <p className="text-2xl font-bold text-green-600">89%</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Coverage</p>
            <p className="text-2xl font-bold text-amber-600">76%</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-gray-200">
            <p className="text-xs text-gray-600 mb-1">Issues</p>
            <p className="text-2xl font-bold text-red-600">7</p>
          </div>
        </div>

        <div className="bg-white rounded-lg p-4 border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Weekly Trend</h3>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={complianceTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <YAxis tick={{ fontSize: 12 }} stroke="#9ca3af" />
              <Tooltip contentStyle={{ backgroundColor: "#f3f4f6", border: "1px solid #d1d5db", borderRadius: "8px" }} />
              <Line
                type="monotone"
                dataKey="compliance"
                stroke="#3b82f6"
                dot={{ fill: "#3b82f6", r: 4 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Top Performing Stores</h3>
          <div className="space-y-2">
            {storeData.slice(0, 3).map((store) => (
              <div key={store.id} className="bg-white rounded-lg p-3 border border-gray-200 flex justify-between items-center">
                <span className="text-sm font-semibold text-gray-900">{store.name}</span>
                <span className="text-sm font-bold text-blue-600">{store.compliance}%</span>
              </div>
            ))}
          </div>
        </div>

        <button className="w-full py-3 bg-white border border-gray-300 text-gray-900 font-semibold rounded-lg hover:bg-gray-50 transition">
          View Full Report
        </button>
      </div>
    </div>
  );

  const MobileProfileScreen = () => (
    <div className="h-full flex flex-col bg-gray-50">
      <div className="bg-white border-b border-gray-200 p-4">
        <h2 className="text-lg font-bold text-gray-900">Profile</h2>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-20">
        <div className="bg-white rounded-lg p-6 border border-gray-200 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-3 shadow-md">
            <span className="text-2xl font-bold text-white">AJ</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900">Alex Johnson</h3>
          <p className="text-sm text-gray-600">Field Sales Rep</p>
        </div>

        <div className="grid grid-cols-3 gap-3 bg-white rounded-lg p-4 border border-gray-200">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">156</p>
            <p className="text-xs text-gray-600">Visits</p>
          </div>
          <div className="text-center border-l border-r border-gray-200">
            <p className="text-2xl font-bold text-green-600">89%</p>
            <p className="text-xs text-gray-600">Score</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-amber-600">12</p>
            <p className="text-xs text-gray-600">Stores</p>
          </div>
        </div>

        <div className="space-y-2">
          {[
            { icon: Navigation, label: "My Routes" },
            { icon: Wifi, label: "Offline Data" },
            { icon: Bell, label: "Notifications" },
            { icon: FileText, label: "Help & Support" },
            { icon: Settings, label: "App Settings" },
          ].map((item, idx) => (
            <button
              key={idx}
              className="w-full flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200 hover:bg-gray-50 transition text-left"
            >
              <item.icon className="w-5 h-5 text-gray-600" />
              <span className="text-sm font-semibold text-gray-900">{item.label}</span>
              <ChevronRight className="w-4 h-4 text-gray-400 ml-auto" />
            </button>
          ))}
        </div>

        <div className="bg-blue-50 rounded-lg p-4 border border-blue-200 flex items-center gap-2">
          <Wifi className="w-4 h-4 text-green-500" />
          <div className="flex-1">
            <p className="text-xs font-semibold text-gray-900">Sync Status</p>
            <p className="text-xs text-gray-600">All data synced • 2 hours ago</p>
          </div>
        </div>

        <button className="w-full py-3 bg-red-50 border border-red-200 text-red-600 font-semibold rounded-lg hover:bg-red-100 transition flex items-center justify-center gap-2">
          <LogOut className="w-4 h-4" /> Logout
        </button>
      </div>
    </div>
  );

  // ==================== ADMIN PORTAL SCREENS ====================

  const AdminDashboard = () => (
    <div className="col-span-4 space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Total Visits Today", value: "142", change: "+12%", icon: Store, color: "blue" },
          { label: "Avg Compliance", value: "91.3%", change: "+2.1%", icon: CheckCircle, color: "green" },
          { label: "Out of Stock Rate", value: "3.2%", change: "-0.8%", icon: Package, color: "red" },
          { label: "Active Field Reps", value: "28/32", change: "87.5%", icon: Users, color: "amber" },
        ].map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
            <div className="flex items-start justify-between mb-3">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                card.color === "blue" ? "bg-blue-100" :
                card.color === "green" ? "bg-green-100" :
                card.color === "red" ? "bg-red-100" : "bg-amber-100"
              }`}>
                <card.icon className={`w-5 h-5 ${
                  card.color === "blue" ? "text-blue-600" :
                  card.color === "green" ? "text-green-600" :
                  card.color === "red" ? "text-red-600" : "text-amber-600"
                }`} />
              </div>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${
                card.color === "blue" ? "bg-blue-100 text-blue-700" :
                card.color === "green" ? "bg-green-100 text-green-700" :
                card.color === "red" ? "bg-red-100 text-red-700" : "bg-amber-100 text-amber-700"
              }`}>
                {card.change}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-1">{card.label}</p>
            <p className="text-3xl font-bold text-gray-900">{card.value}</p>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-2 gap-4">
        {/* Compliance Trend */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Compliance Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={complianceTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{ backgroundColor: "#f3f4f6", border: "1px solid #d1d5db", borderRadius: "8px" }} />
              <Line
                type="monotone"
                dataKey="compliance"
                stroke="#3b82f6"
                dot={{ fill: "#3b82f6", r: 5 }}
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Visits by Region */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Visits by Region</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={visitsByRegionData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="region" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{ backgroundColor: "#f3f4f6", border: "1px solid #d1d5db", borderRadius: "8px" }} />
              <Bar dataKey="visits" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity & Alerts */}
      <div className="grid grid-cols-2 gap-4">
        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {[
              { event: "Store visit completed", store: "Downtown Market", time: "2 hours ago" },
              { event: "Out of stock detected", store: "Central Plaza", time: "45 minutes ago" },
              { event: "Planogram mismatch", store: "Westside Store", time: "1 hour ago" },
              { event: "Compliance threshold reached", store: "North Point", time: "3 hours ago" },
            ].map((activity, idx) => (
              <div key={idx} className="flex gap-3 pb-3 border-b border-gray-200 last:border-b-0 last:pb-0">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900">{activity.event}</p>
                  <p className="text-xs text-gray-500">{activity.store} • {activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Alerts */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Critical Alerts</h3>
          <div className="space-y-3">
            {[
              { severity: "critical", message: "Stock level critically low", store: "West Mall" },
              { severity: "warning", message: "Planogram compliance 68%", store: "Metro Center" },
              { severity: "critical", message: "Competitor pricing below threshold", store: "Downtown" },
            ].map((alert, idx) => (
              <div key={idx} className={`p-3 rounded-lg border ${
                alert.severity === "critical"
                  ? "bg-red-50 border-red-200"
                  : "bg-amber-50 border-amber-200"
              }`}>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    {alert.severity === "critical" ? (
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-sm font-semibold ${
                      alert.severity === "critical" ? "text-red-900" : "text-amber-900"
                    }`}>
                      {alert.message}
                    </p>
                    <p className={`text-xs ${
                      alert.severity === "critical" ? "text-red-700" : "text-amber-700"
                    }`}>
                      {alert.store}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const AdminStoreManagement = () => (
    <div className="col-span-4 space-y-4">
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">Store Management</h2>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition flex items-center gap-2">
            <Plus className="w-4 h-4" /> Add Store
          </button>
        </div>

        <div className="flex gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search stores..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition flex items-center gap-2">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Store Name</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Location</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Last Visit</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Compliance</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Status</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {storeData.map((store) => (
                <tr key={store.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-semibold text-gray-900">{store.name}</td>
                  <td className="px-4 py-3 text-gray-600 flex items-center gap-1">
                    <MapPin className="w-4 h-4" /> {store.address}
                  </td>
                  <td className="px-4 py-3 text-gray-600">{store.lastVisit}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            store.compliance >= 90 ? "bg-green-500" : store.compliance >= 80 ? "bg-blue-500" : "bg-amber-500"
                          }`}
                          style={{ width: `${store.compliance}%` }}
                        />
                      </div>
                      <span className="font-semibold text-gray-900">{store.compliance}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full ${
                        store.status === "completed"
                          ? "bg-green-100 text-green-700"
                          : store.status === "in-progress"
                          ? "bg-blue-100 text-blue-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      {store.status === "in-progress" ? "In Progress" : store.status === "completed" ? "✓ Done" : "Pending"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm">View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex justify-between items-center text-sm text-gray-600">
          <span>Showing 6 of 24 stores</span>
          <div className="flex gap-2">
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Previous</button>
            <button className="px-3 py-1 border border-gray-300 rounded hover:bg-gray-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );

  const AdminShelfAnalytics = () => (
    <div className="col-span-4 space-y-4">
      {/* Overview Cards */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <p className="text-gray-600 text-sm mb-2">Planogram Compliance</p>
          <p className="text-4xl font-bold text-blue-600">88.4%</p>
          <p className="text-xs text-gray-500 mt-2">↑ 2.3% from last week</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <p className="text-gray-600 text-sm mb-2">Average Share of Shelf</p>
          <p className="text-4xl font-bold text-green-600">94.2%</p>
          <p className="text-xs text-gray-500 mt-2">↑ 1.1% from last week</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <p className="text-gray-600 text-sm mb-2">Out of Stock Incidents</p>
          <p className="text-4xl font-bold text-red-600">23</p>
          <p className="text-xs text-gray-500 mt-2">↓ 4 from last week</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-4">
        {/* Share of Shelf Pie Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Share of Shelf by Brand</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={shareOfShelfData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={(entry) => `${entry.name}: ${entry.value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {shareOfShelfData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Compliance Trend Area Chart */}
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">Compliance Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={complianceTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="day" stroke="#9ca3af" />
              <YAxis stroke="#9ca3af" />
              <Tooltip contentStyle={{ backgroundColor: "#f3f4f6", border: "1px solid #d1d5db", borderRadius: "8px" }} />
              <Area
                type="monotone"
                dataKey="compliance"
                fill="#3b82f6"
                stroke="#3b82f6"
                fillOpacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Category Breakdown Table */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Category Breakdown</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Category</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Compliance</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Out of Stock</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Avg Price Var.</th>
              </tr>
            </thead>
            <tbody>
              {[
                { category: "Beverages", compliance: 92, oos: 2, priceVar: "0.3%" },
                { category: "Snacks", compliance: 88, oos: 4, priceVar: "0.5%" },
                { category: "Dairy", compliance: 85, oos: 6, priceVar: "0.8%" },
                { category: "Frozen Foods", compliance: 91, oos: 3, priceVar: "0.4%" },
              ].map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-semibold text-gray-900">{item.category}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: `${item.compliance}%` }}
                        />
                      </div>
                      <span className="font-semibold text-gray-900">{item.compliance}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-gray-600">{item.oos} items</td>
                  <td className="px-4 py-3 text-gray-600">{item.priceVar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const AdminImageReview = () => (
    <div className="col-span-4 space-y-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-900">Image Review</h2>
        <div className="flex gap-2">
          {["All", "Pending Review", "Approved", "Flagged"].map((filter) => (
            <button
              key={filter}
              className="text-xs px-3 py-1 rounded-full border border-gray-300 font-semibold hover:bg-blue-50 hover:border-blue-300"
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((img) => (
          <div key={img} className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden hover:shadow-lg transition">
            <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400 relative group">
              <div className="absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded font-semibold">
                Pending
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition flex items-center justify-center">
                <button className="opacity-0 group-hover:opacity-100 transition bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm flex items-center gap-2">
                  <Eye className="w-4 h-4" /> Review
                </button>
              </div>
            </div>
            <div className="p-3">
              <p className="text-xs font-semibold text-gray-900">Downtown Market</p>
              <p className="text-xs text-gray-500">2025-03-14 · 14:32</p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center text-sm text-gray-600 mt-6">
        Showing 9 of 47 images • <button className="text-blue-600 hover:text-blue-700 font-semibold">Load more</button>
      </div>
    </div>
  );

  const AdminTeamManagement = () => (
    <div className="col-span-4 space-y-4">
      <h2 className="text-lg font-bold text-gray-900">Team Management</h2>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: "Total Team", value: "32", icon: Users },
          { label: "Active Today", value: "28", icon: Wifi },
          { label: "Avg Compliance", value: "89.2%", icon: CheckCircle },
          { label: "Visits Today", value: "142", icon: Store },
        ].map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl p-4 border border-gray-200 shadow-md">
            <div className="flex items-start justify-between mb-2">
              <p className="text-xs text-gray-600">{card.label}</p>
              <card.icon className="w-4 h-4 text-gray-400" />
            </div>
            <p className="text-2xl font-bold text-gray-900">{card.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Team Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-gray-200 bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Name</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Territory</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Visits Today</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Compliance</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody>
              {teamData.map((rep) => (
                <tr key={rep.id} className="border-b border-gray-200 hover:bg-gray-50 transition">
                  <td className="px-4 py-3 font-semibold text-gray-900">{rep.name}</td>
                  <td className="px-4 py-3 text-gray-600">{rep.territory}</td>
                  <td className="px-4 py-3 text-gray-900 font-semibold">{rep.visitsToday}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full ${
                            rep.compliance >= 90 ? "bg-green-500" : rep.compliance >= 80 ? "bg-blue-500" : "bg-amber-500"
                          }`}
                          style={{ width: `${rep.compliance}%` }}
                        />
                      </div>
                      <span className="text-gray-900 font-semibold">{rep.compliance}%</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 w-fit ${
                        rep.status === "online"
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-700"
                      }`}
                    >
                      <div className={`w-2 h-2 rounded-full ${rep.status === "online" ? "bg-green-500" : "bg-gray-500"}`} />
                      {rep.status === "online" ? "Online" : "Offline"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const AdminReports = () => (
    <div className="col-span-4 space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-gray-900">Reports</h2>
        <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition">
          Schedule Report
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { title: "Compliance Report", icon: FileText },
          { title: "Visit Summary", icon: Store },
          { title: "Share of Shelf", icon: BarChart3 },
          { title: "Stock Audit", icon: Package },
        ].map((template, idx) => (
          <div key={idx} className="bg-white rounded-xl p-6 border border-gray-200 shadow-md cursor-pointer hover:shadow-lg transition">
            <template.icon className="w-8 h-8 text-blue-600 mb-3" />
            <h3 className="text-sm font-semibold text-gray-900 mb-2">{template.title}</h3>
            <p className="text-xs text-gray-500 mb-4">Generate & download</p>
            <button className="text-blue-600 text-sm font-semibold hover:text-blue-700">Generate</button>
          </div>
        ))}
      </div>

      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
        <h3 className="text-sm font-semibold text-gray-900 mb-4">Recent Reports</h3>
        <div className="space-y-3">
          {[
            { name: "Weekly Compliance Report", date: "Mar 13, 2025", size: "2.4 MB" },
            { name: "Store Performance Summary", date: "Mar 12, 2025", size: "1.8 MB" },
            { name: "Regional Share of Shelf", date: "Mar 11, 2025", size: "3.2 MB" },
            { name: "Monthly Stock Audit", date: "Mar 1, 2025", size: "5.1 MB" },
          ].map((report, idx) => (
            <div key={idx} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition">
              <div className="flex items-center gap-3 flex-1">
                <FileText className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-gray-900">{report.name}</p>
                  <p className="text-xs text-gray-500">{report.date} • {report.size}</p>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const AdminAlertsCenter = () => (
    <div className="col-span-4 space-y-4">
      <h2 className="text-lg font-bold text-gray-900 mb-6">Alerts Center</h2>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-red-50 rounded-xl p-6 border border-red-200 shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-red-600 text-xs font-semibold mb-1">CRITICAL</p>
              <p className="text-3xl font-bold text-red-600">5</p>
            </div>
            <AlertTriangle className="w-6 h-6 text-red-600" />
          </div>
        </div>
        <div className="bg-amber-50 rounded-xl p-6 border border-amber-200 shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-amber-600 text-xs font-semibold mb-1">WARNING</p>
              <p className="text-3xl font-bold text-amber-600">12</p>
            </div>
            <AlertTriangle className="w-6 h-6 text-amber-600" />
          </div>
        </div>
        <div className="bg-blue-50 rounded-xl p-6 border border-blue-200 shadow-md">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-blue-600 text-xs font-semibold mb-1">INFO</p>
              <p className="text-3xl font-bold text-blue-600">8</p>
            </div>
            <Bell className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {["All", "Critical", "Warning", "Info"].map((filter) => (
          <button
            key={filter}
            className="text-xs px-3 py-1 rounded-full border border-gray-300 font-semibold hover:bg-blue-50 hover:border-blue-300"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {[
          { severity: "critical", title: "Stock level critically low", message: "West Mall store", time: "15 min ago" },
          { severity: "critical", title: "Planogram compliance alert", message: "Metro Center - 62%", time: "1 hour ago" },
          { severity: "warning", title: "Competitor pricing detected", message: "Downtown location", time: "2 hours ago" },
          { severity: "warning", title: "Image processing delayed", message: "8 images pending", time: "3 hours ago" },
          { severity: "info", title: "Daily compliance report ready", message: "89.2% average", time: "4 hours ago" },
          { severity: "critical", title: "Out of stock - high priority item", message: "North Point store", time: "5 hours ago" },
        ].map((alert, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-lg border flex gap-4 ${
              alert.severity === "critical"
                ? "bg-red-50 border-red-200"
                : alert.severity === "warning"
                ? "bg-amber-50 border-amber-200"
                : "bg-blue-50 border-blue-200"
            }`}
          >
            <div className="flex-shrink-0 mt-0.5">
              {alert.severity === "critical" ? (
                <AlertTriangle className="w-5 h-5 text-red-600" />
              ) : alert.severity === "warning" ? (
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              ) : (
                <Bell className="w-5 h-5 text-blue-600" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p
                className={`text-sm font-semibold ${
                  alert.severity === "critical"
                    ? "text-red-900"
                    : alert.severity === "warning"
                    ? "text-amber-900"
                    : "text-blue-900"
                }`}
              >
                {alert.title}
              </p>
              <p
                className={`text-xs ${
                  alert.severity === "critical"
                    ? "text-red-700"
                    : alert.severity === "warning"
                    ? "text-amber-700"
                    : "text-blue-700"
                }`}
              >
                {alert.message} • {alert.time}
              </p>
            </div>
            <button
              className={`text-xs font-semibold px-3 py-1 rounded whitespace-nowrap ${
                alert.severity === "critical"
                  ? "bg-red-200 text-red-700 hover:bg-red-300"
                  : alert.severity === "warning"
                  ? "bg-amber-200 text-amber-700 hover:bg-amber-300"
                  : "bg-blue-200 text-blue-700 hover:bg-blue-300"
              }`}
            >
              Resolve
            </button>
          </div>
        ))}
      </div>
    </div>
  );

  // ==================== MAIN RENDER ====================

  return (
    <div className="w-full h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* View Toggle */}
      <div className="fixed top-4 left-4 z-50 flex gap-2 bg-white rounded-lg p-2 shadow-lg border border-gray-200">
        <button
          onClick={() => setIsMobileView(true)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${
            isMobileView
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Smartphone className="w-4 h-4" />
          <span className="text-sm font-semibold">Mobile</span>
        </button>
        <button
          onClick={() => setIsMobileView(false)}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg transition ${
            !isMobileView
              ? "bg-blue-600 text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          <Monitor className="w-4 h-4" />
          <span className="text-sm font-semibold">Admin</span>
        </button>
      </div>

      {isMobileView ? (
        // Mobile View
        <div className="w-full max-w-sm mx-auto">
          <div className="bg-gray-900 rounded-3xl shadow-2xl border-8 border-gray-800 overflow-hidden" style={{ aspectRatio: "375/812" }}>
            {/* Phone Status Bar */}
            <div className="bg-gray-900 px-6 py-3 flex justify-between items-center text-white text-xs font-semibold">
              <span>9:41</span>
              <div className="flex gap-1">
                <Wifi className="w-3 h-3" />
                <Bell className="w-3 h-3" />
              </div>
            </div>

            {/* Phone Screen */}
            <div className="bg-white h-full overflow-hidden flex flex-col" style={{ height: "calc(100% - 56px)" }}>
              {mobileScreen === "login" && <MobileLoginScreen />}
              {mobileScreen === "dashboard" && <MobileDashboardScreen />}
              {mobileScreen === "stores" && <MobileStoresScreen />}
              {mobileScreen === "storeDetail" && <MobileStoreDetailScreen />}
              {mobileScreen === "capture" && <MobileCaptureScreen />}
              {mobileScreen === "stitching" && <MobileStitchingScreen />}
              {mobileScreen === "upload" && <MobileUploadScreen />}
              {mobileScreen === "analysis" && <MobileAnalysisScreen />}
              {mobileScreen === "analytics" && <MobileAnalyticsScreen />}
              {mobileScreen === "profile" && <MobileProfileScreen />}
            </div>
          </div>
        </div>
      ) : (
        // Admin Portal View
        <div className="w-full h-full flex bg-gray-50">
          {/* Sidebar */}
          <div className="w-64 bg-white border-r border-gray-200 shadow-sm fixed left-0 top-0 bottom-0 overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <span className="font-bold text-lg text-gray-900">ShelfVision</span>
              </div>
              <p className="text-xs text-gray-500">Admin Portal</p>
            </div>

            <nav className="p-4 space-y-2">
              {[
                { label: "Dashboard", icon: Home, id: "dashboard" },
                { label: "Stores", icon: Store, id: "stores" },
                { label: "Shelf Analytics", icon: BarChart3, id: "analytics" },
                { label: "Image Review", icon: Image, id: "imageReview" },
                { label: "Team", icon: Users, id: "team" },
                { label: "Reports", icon: FileText, id: "reports" },
                { label: "Alerts", icon: AlertTriangle, id: "alerts" },
                { label: "Settings", icon: Settings, id: "settings" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setAdminScreen(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    adminScreen === item.id
                      ? "bg-blue-50 text-blue-600 border-l-4 border-blue-600"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-sm font-semibold">{item.label}</span>
                </button>
              ))}
            </nav>

            <div className="border-t border-gray-200 p-4 mt-4">
              <button className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition text-sm font-semibold">
                <LogOut className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 ml-64">
            {/* Top Bar */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
              <div className="flex items-center justify-between px-8 py-4">
                <div className="flex-1 flex items-center gap-3">
                  <div className="relative max-w-xs">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <button className="relative text-gray-600 hover:text-gray-900">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full" />
                  </button>
                  <button className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold hover:shadow-md transition">
                    AJ
                  </button>
                </div>
              </div>
            </div>

            {/* Page Content */}
            <div className="p-8 overflow-y-auto" style={{ height: "calc(100vh - 80px)" }}>
              <div className="grid grid-cols-4 gap-4">
                {adminScreen === "dashboard" && <AdminDashboard />}
                {adminScreen === "stores" && <AdminStoreManagement />}
                {adminScreen === "analytics" && <AdminShelfAnalytics />}
                {adminScreen === "imageReview" && <AdminImageReview />}
                {adminScreen === "team" && <AdminTeamManagement />}
                {adminScreen === "reports" && <AdminReports />}
                {adminScreen === "alerts" && <AdminAlertsCenter />}
                {adminScreen === "settings" && (
                  <div className="col-span-4">
                    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-md">
                      <h2 className="text-lg font-bold text-gray-900 mb-4">Settings</h2>
                      <p className="text-gray-600 text-sm">Settings panel coming soon...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}