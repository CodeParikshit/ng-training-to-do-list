# To-Do List Application (Angular & SLDS)

A professional, responsive To-Do List application built with **Angular** and **Salesforce Lightning Design System (SLDS)**. This project follows modular architecture, standard naming conventions, and implements a full CRUD flow using a RESTful API.

## 🚀 Features
- **Full CRUD:** Create, Read, Update, and Delete tasks.
- **Pagination:** Efficiently handle large lists with configurable page sizes.
- **Modern UI:** Built using SLDS for a clean, enterprise-grade user interface.
- **Modular Design:** Divided into Task List and Task Form components for better maintainability.
- **API Integration:** Connects to a mock backend via Angular's `HttpClient`.

---

## 📺 Demo
### Screen Recording
https://github.com/user-attachments/assets/722f8951-bc2d-43a6-972c-10712921f2a5

---

## 📸 Screenshots

### 1. Main Task List (View)
![Main Task List](https://github.com/user-attachments/assets/0906081b-960d-4c7d-8d3f-c6cb7bc795ad)
*The main dashboard showing paginated tasks, status, and priority.*

### 2. New/Edit Task Modal
![Task Form Modal](https://github.com/user-attachments/assets/40a18cd3-65cb-4b64-92cd-186a5de883ad)
*Intuitive modal form for adding and updating task details with validation.*

### 3. Delete Confirmation
![Delete Confirmation](https://github.com/user-attachments/assets/88057f8c-1fde-476b-b66c-ff4352618cf8)
*Safety check before removing data from the database.*

---

## 🛠️ Tech Stack & Best Practices
- **Frontend:** Angular (Standalone Components, Signals)
- **UI Framework:** Salesforce Lightning Design System (SLDS)
- **Backend Mock:** JSON-Server
- **Best Practices Followed:**
  - **Modular Approach:** Separate components for Form and List logic.
  - **Naming Conventions:** Strict adherence to `camelCase` and Angular style guides.
  - **Single Responsibility:** Logic moved to dedicated Services and Models.
  - **Responsive Design:** Optimized for both Desktop and Mobile views.

---

## ⚙️ Setup Instructions

### Prerequisites
- Node.js & npm
- Angular CLI (`npm install -g @angular/cli`)

### 1. Clone and Install
```bash
git clone [https://github.com/CodeParikshit/ng-training-to-do-list.git](https://github.com/CodeParikshit/ng-training-to-do-list.git)
cd ng-training-to-do-list
npm install
