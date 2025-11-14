
Grimaldi Log — Frontend + Backend (Admin) project
================================================

This package includes a React frontend and a simple Express backend that stores site content in `backend/data.json`.
Admin panel authenticates with the credentials you provided and saves changes to the server.

Admin credentials:
- User: Grimadmin123456
- Pass: Admingrimaldi654321

How to run (local):
1. Install dependencies:
   - Frontend: cd frontend && npm install
   - Backend: cd backend && npm install
2. Start backend: cd backend && npm start   (server runs on http://localhost:4000)
3. Start frontend: cd frontend && npm run dev  (open http://localhost:5173)
4. Admin panel: http://localhost:5173/admin

Images:
Please download real photos and place them into `frontend/src/assets/` with the following names:
- port.jpg  (port with containers and trucks)
- fleet.jpg (fleet or trucks)
- map.jpg   (world map illustration or screenshot with Buenos Aires highlighted)

Suggested sources (free to use):
- Port & containers (Unsplash): https://unsplash.com/s/photos/port-container
- Container truck images (Unsplash): https://unsplash.com/s/photos/container-truck
- Refrigerated truck (Pexels): https://www.pexels.com/search/refrigerated%20truck/
- Buenos Aires / Argentina images (Unsplash): https://unsplash.com/s/photos/buenos-aires
- World map images (Unsplash): https://unsplash.com/s/photos/world-map

Notes:
- I couldn't download images automatically in this environment, so please download the images manually from the links above and save them with the filenames listed.
- After placing images in `frontend/src/assets/`, restart the frontend dev server to see them.

If you want, I can provide direct image suggestions (specific image page links) for each asset; tell me which style you prefer (photorealistic, aerial, colorful illustration) and I will list 3 recommended images per asset.
