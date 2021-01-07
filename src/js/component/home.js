import React from "react";

import { Navbar } from "./Navbar";
import { Jumbotron } from "./Jumbotron";
import { Cards } from "./Cards";
import { Footer } from "./Footer";

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row text-center">
					<div className="col-sm-3">
						<Cards
							srcImage="https://picsum.photos/id/1040/500/325"
							cardTitle="Card Title 1"
							cardContent="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
							url="#"
							label="Find Out More!"
						/>
					</div>
					<div className="col-sm-3">
						<Cards
							srcImage="https://picsum.photos/id/454/500/325"
							cardTitle="Card Title 2"
							cardContent="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
							url="#"
							label="Find Out More!"
						/>
					</div>
					<div className="col-sm-3">
						<Cards
							srcImage="https://picsum.photos/id/122/500/325"
							cardTitle="Card Title 3"
							cardContent="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
							url="#"
							label="Find Out More!"
						/>
					</div>
					<div className="col-sm-3">
						<Cards
							srcImage="https://picsum.photos/id/367/500/325"
							cardTitle="Card Title 4"
							cardContent="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system."
							url="#"
							label="Find Out More!"
						/>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
