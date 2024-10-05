import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNDMyMTRhMGRmZTIwZTg2Y2ZmYTkwY2IyYWNhZTdmZSIsIm5iZiI6MTcyNTIwMjczMi41MDg3MjEsInN1YiI6IjY2Y2Y1NGVmNGY0MDNlNjMyZTU5YTZlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EVInB1ak2hCksIpue5IV52FFKZBTFpH7Ihuxl3SFYoA'
      }
})

export default instance;