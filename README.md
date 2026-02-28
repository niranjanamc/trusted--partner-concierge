# Voyage Monk Website

Welcome! This guide will help you set up and run the **Voyage Monk** website on your local computer. You don't need to be a coding expert to get this running—just follow the steps below.

---

## 🛠️ Prerequisites (What you need installed)

Before you begin, you need to install a program called **Node.js**. This allows your computer to run the website code.

1.  **Download Node.js:**
    *   Go to the official website: [https://nodejs.org/](https://nodejs.org/)
    *   Download the **LTS (Long Term Support)** version (recommended for most users).
    *   Run the installer and follow the on-screen instructions (clicking "Next" until it's done is usually fine).

2.  **Verify Installation (Optional):**
    *   Open your computer's terminal (Command Prompt on Windows, Terminal on Mac).
    *   Type `node -v` and press Enter. If you see a version number (like `v18.x.x`), you're good to go!

---

## 🚀 Step 1: Download the Code

You have two ways to get the code onto your computer:

### Option A: Download as ZIP (Easiest)
1.  Go to the GitHub repository page: [https://github.com/niranjanamc/trusted--partner-concierge](https://github.com/niranjanamc/trusted--partner-concierge)
2.  Click the green **<> Code** button.
3.  Select **Download ZIP**.
4.  Extract (unzip) the downloaded folder to a location you can easily find (like your Desktop or Documents).

### Option B: Using Git (If you have it installed)
1.  Open your terminal/command prompt.
2.  Run the command:
    ```bash
    git clone https://github.com/niranjanamc/trusted--partner-concierge.git
    ```

---

## 📦 Step 2: Install Dependencies

Now that you have the code, you need to install the "parts" that make it work (libraries and tools).

1.  **Open your Terminal/Command Prompt.**
2.  **Navigate to the project folder.**
    *   **Mac / Linux:** Type `cd ` (with a space) and drag the unzipped folder into the terminal window. It will look something like `cd /Users/yourname/Desktop/trusted-partner-concierge`. Press Enter.
    *   **Windows:** 
        *   Find the folder in File Explorer.
        *   Right-click inside the folder and select "Open in Terminal" (or "Git Bash Here" if you installed Git).
        *   *Alternatively:* In Command Prompt, type `cd ` (with a space), paste the path to the folder, and press Enter.
3.  **Install the tools:**
    *   Type the following command and press Enter:
        ```bash
        npm install
        ```
    *   You will see a lot of text scrolling by. Wait for it to finish. It might take a minute or two.

---

## ▶️ Step 3: Run the Website

You are ready to launch!

1.  In the same terminal window, type:
    ```bash
    npm run dev
    ```
2.  Press Enter.
3.  You should see a message saying something like:
    ```
      VITE v5.x.x  ready in 300 ms

      ➜  Local:   http://localhost:5173/
      ➜  Network: use --host to expose
    ```
4.  **Open your web browser** (Chrome, Safari, etc.).
5.  Type **`http://localhost:5173`** in the address bar and press Enter.

🎉 **The website should now be running on your screen!**

---

## 📝 How to Update Content

Most of the text and images you might want to change are in specific files. You can edit these using any text editor (Notepad, TextEdit), but **VS Code** is recommended.

### Updating Destinations
To add or change places in the "Destinations" planner:
1.  Go to the `src/data` folder.
2.  Open `destinations.js`.
3.  You will see a list of places. You can edit the `name`, `description`, `image`, or `attractions` here.
    *   *Note: Be careful not to delete the quotes `""` or commas `,`!*

### Updating Contact Email
To change where the contact forms are sent:
1.  You will need to set up an account with **EmailJS**.
2.  Update the keys in the `.env` file (you might need to create this file if it's hidden).

---

## ❓ Troubleshooting

*   **"Command not found"**: Make sure you installed Node.js and restarted your terminal.
*   **"Port already in use"**: If `npm run dev` fails, you might have another website running. It will usually ask if you want to use a different port (like 5174). Just type `y` and Enter.

---

*Created for Voyage Monk.*
