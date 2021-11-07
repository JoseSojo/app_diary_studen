<div class="container px-md-5 px-2" id="config">
	<!-- DATA PERSON -->
	<form class="row col-12 py-3 px-5 shadow" autocomplete="off" id="form-config">
		<!-- NAME -->
		<div class="input-group my-2"> 
			<i class="px-3 px-md-5 lead input-group-text bi-person-fill"></i>
			<input type="text" class="form-control shadow-none" id="name" placeholder="Nombre">
		</div>
		<!-- SURNAME -->
		<div class="input-group my-2">
			<i class="px-3 px-md-5 lead input-group-text bi-person"></i>
			<input type="text" class="form-control shadow-none" id="surname" placeholder="Apellido">
		</div>
		<!-- RACE -->
		<div class="input-group my-2">
			<i class="px-3 px-md-5 lead input-group-text bi-clipboard"></i>
			<input type="text" class="form-control shadow-none" id="univ-race" placeholder="Carrera Universitaria">
		</div>
		<!-- UNIV -->
		<div class="input-group my-2">
			<i class="px-3 px-md-5 lead input-group-text bi-building"></i>
			<input type="text" class="form-control shadow-none" id="univ" placeholder="Universidad">
		</div>
		<!-- DURACION RACE -->
		<div class="input-group my-2">
			<i class="px-3 px-md-5 lead input-group-text bi-speedometer"></i>
			<input type="text" class="form-control shadow-none" id="duration-race" placeholder="Años duracion de la carrera">
		</div>
		<!-- AGE ADMIN -->
		<div class="input-group my-2">
			<i class="px-3 px-md-5 lead input-group-text bi-calendar-date-fill"></i>
			<input type="text" class="form-control shadow-none" id="age-admin" placeholder="Edad de ingreso a la universidad">
		</div>
		<!-- YEAR ADMIN -->
		<div class="input-group my-2"> 
			<i class="px-3 px-md-5 lead input-group-text bi-calendar-month-fill"></i>
			<input type="text" class="form-control shadow-none" id="year-admin" placeholder="Año de ingreso a la universidad">
		</div>
		<div class="alert alert-success" id="alert-add-data"></div>
		<!-- SUBMIT -->
		<div class="col-10 col-md-5 mt-3 m-auto input-group my-1">
			<button type="submit" class="btn btn-outline-secondary m-auto w-75 disabled" id="btn-submit-data">
				Enviar Datos
				<i class="bi-check-lg text-success lead"></i>
			</button>
		</div>
	</form>
	<!-- DATA MATTER -->
	
	<form class="row col-12 py-3 my-5 shadow" autocomplete="off" id="form-matter">
		<h4 class="lead mb-3">Agrega una asignatura</h4>
		<div class="input-group d-flex">
			<label for="matter" class="col-2 col-md-3 bg-dark text-light center-xy lead input-group-text bi-clipboard-check">
			</label>
			<input type="text" id="input-matter" class="form-control border-none shadow-none" placeholder="Nombre de la materia">
		</div>
		<div class="alert alert-success" id="alert-add-matter"></div>
		<div class="d-flex">
			<button type="submit" class="btn btn-outline-secondary disabled w-75 m-auto mt-4" id="submit-matter">
				Guardar Materia
				<i class="bi-check-lg text-success lead"></i>
			</button>
		</div>
	</form>
</div>