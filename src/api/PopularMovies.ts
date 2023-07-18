import axios from "axios";
import { MovieModel } from "../model/MovieModel.";

export class TestMovie {
	static getPopularMovies = async () =>
		await axios.get<MovieModel[]>(
			"http://localhost:8080/api/movies/popular",
			{
				
				headers: {
					accept: "application/json",
				},
			}
		);
}
