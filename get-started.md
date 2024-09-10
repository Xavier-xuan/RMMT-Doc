---
outline: deep
---

# Getting Started

The Roommate Matcher consists of three modules: **API Server (Backend)**, **Student Frontend**, and **Admin Frontend**.

## Deploy API Server (Backend)

The API server is built with the [Flask](https://flask.palletsprojects.com/) framework, a lightweight Python web framework. The repository is located at [https://github.com/Xavier-xuan/RMMT-API](https://github.com/Xavier-xuan/RMMT-API). We offer two different installation methods, and you can choose the one that best suits your needs.

### Prerequisites

- Python version 3.10 or higher
- PyTorch version 2.3.0 or higher
- MySQL server version 5.7 or higher

### Manual Deployment

1. Clone the repository:
    ```bash
    git clone https://github.com/Xavier-xuan/RMMT-API.git
    ```

2. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

3. Update the configuration:
    ```bash
    cp config.py.example config.py
    ```
    Edit `config.py` and update it with your own settings.
    
    ::: danger
    Make sure to regenerate a random string as your `JWT_SECRET_KEY`; otherwise, the system will be extremely insecure.
    :::

4. Initialize the database:
    ```bash
    python models.py
    ```

5. Run the web server using Gunicorn:
    ```bash
    gunicorn app:app -c ./gunicorn.config.py
    ```

6. Start the matching service:
    ```bash
    python tasks.py
    ```

The website will be accessible on port 5000.

### Docker Deployment

Ensure that both Docker and Docker Compose are installed.

1. Clone the repository:
    ```bash
    git clone https://github.com/Xavier-xuan/RMMT-API.git
    ```

2. Install the required packages:
    ```bash
    pip install -r requirements.txt
    ```

3. Update the configuration:
    ```bash
    cp config.py.example config.py
    ```
    Edit `config.py` and update it with your own settings.
    
    ::: danger
    Make sure to regenerate a random string as your `JWT_SECRET_KEY`; otherwise, the system will be extremely insecure.
    :::

4. Start the Docker service:
    ```bash
    docker-compose up -d
    ```

The website will be accessible on port 5000.


## Deploy Student Frontend and Admin Frontend

Both the **Student Frontend** and **Admin Frontend** are [single-page applications (SPAs)](https://en.wikipedia.org/wiki/Single-page_application) built with [Nuxt.js](https://nuxt.com/). These frontends are purely static sites. The repositories are located at [https://github.com/Xavier-xuan/RMMT-Student.git](https://github.com/Xavier-xuan/RMMT-Student.git) and [https://github.com/Xavier-xuan/RMMT-Admin.git](https://github.com/Xavier-xuan/RMMT-Admin.git), respectively.

### Prerequisites

- Yarn
- Node.js version 18 or higher

### Manual Deployment

1. Clone the repository:

    For **Student Frontend**:
    ```bash
    git clone https://github.com/Xavier-xuan/RMMT-Student.git
    ```

    For **Admin Frontend**:
    ```bash
    git clone https://github.com/Xavier-xuan/RMMT-Admin.git
    ```

2. Update the config:

    Edit `nuxt.config.js`, update the line 86 `axios.baseURL` with your backend URL.

3. Generate Static Files:

    ```bash
    yarn generate
    ```

The generated static files locate at the `dist` directory; simply upload the files to your web server.