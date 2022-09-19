# Tour Management

### **Details:** This is a Tour Management Server. It is build by following MVC Pattern. User can can get data by apply multiple filter. User can update any details of the data. I have maintained a structure by creating model and Schema using mongoose.

## [Live Preview](https://tour-management-server.onrender.com): [https://tour-management-server.onrender.com](https://tour-management-server.onrender.com)

<br>

## **Features:**

**GET**/tours (_[Check Here](https://tour-management-server.onrender.com/tours?fields=name,price,views&sort=price&page=0&limit=5)_)

- Get All Tour
- User can select some specific fields for getting the information he needs as query.
- Paginated
- User can send a field (e.g. price) as query to sort the data with it.

```sh
/tours?fields=name,price,views&sort=price&page=1&limit=5
```

<br>

**POST**/tours (_[Check Here](https://tour-management-server.onrender.com/tours)_)

- ADD/Insert a new Tour from body data.
- Schema based data structure with validation.

```sh
/tours

const newTour = {
    name: "Example Tour",
    description: "This a fake tour. If you like adventure and want to be fool you are welcome to this tour..!",
    price: 5000,
    image: "https://ibb.com/exampletour.jpg",
    destination: "Suresshor",
    travelDate: 2022-12-31
}
```

<br>

**GET**/tours/:id (_[Check Here](https://tour-management-server.onrender.com/tours/63287025ba218b4646cb4fde)_)

- GET a tour details by id
- GET all the information of the tour.
- When hit the API It increase the view count by 1.

```sh
/tours/63287025ba218b4646cb4fde
```

<br>

**PATCH**/tour/:id (_[Check Here](https://tour-management-server.onrender.com/tour/63287025ba218b4646cb4fde)_)

- Update a tour data from body data.
- Update data validation with Tour Model & Schema.

```sh
/tour/63287025ba218b4646cb4fde

const updateData = {
    price: 5500,
    travelDate: 2022-12-30
}
```

<br>

**GET**/tour/trending (_[Check Here](https://tour-management-server.onrender.com/tour/trending)_)

- GET Top 3 trending/most visited tour.

```sh
/tour/trending
```

<br>

**GET**/tour/cheapest (_[Check Here](https://tour-management-server.onrender.com/tour/cheapest)_)

- GET Top 3 Cheap price tour.

```sh
/tour/cheapest
```

<br>
<br>
<br>

## Thank You So much for Viewing this. You can **follow** me to explore my future interesting projects.
