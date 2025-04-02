import express, { Application} from 'express';

class Server {
    public app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void {
        this.app.set('port', process.env.PORT || 3000);
    }

    private routes(): void {
        // Aquí se definirán las rutas en el futuro
    }

    public start(): void {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}

const server = new Server();
server.start();
