<div class="container-fluid my-5" id="studen">
	<div class="row d-flex justify-content-between">

		<div class="d-none d-md-block col-md-3 bg-dark text-light h-100 position-fixed py-5">
			<!-- PROFILE -->
			<div class="card rounded-0 p-0">
				<div class="card-header p-0">
					<img src="../assets/img/default-avatar.png" alt="" class="card-img-top" id="img-profile">
				</div>
				<div class="card-body p-0 py-3">
					<div class="form-group text-dark">
						<label for="" class="text-muted">Imagen de perfil</label>
						<input type="file" class="form-control rounded-0 shadow-none">
					</div>
				</div>
			</div>
		</div>

		<div class="d-md-none col-12 bg-dark py-5">
			<!-- PROFILE -->
			<div class="card rounded-0 p-0">
				<div class="card-header p-0">
					<img src="../assets/img/default-avatar.png" alt="" class="card-img-top" id="img-profile">
				</div>
			</div>
		</div>
		<div class="col-12 col-md-3 mb-4"></div>

		<div class="col-12 col-md-9">
			<div class="col-12 mt-5">
          		<div class="card">
          			<div class="card-body px-0">
	          			<!-- DATOS -->
	          			<div class="alert alert-info rounded-0 text-center" id="msj-info-tablet">
	          				Verifica que tus datos esten correctos
	          			</div>
	          			<table class="table table-striped table-sm">
	          				<thead>
	          					<tr class="d-flex">
	      							<span class="lead">
	      								Tus Datos
	      							</span>
	      							<button class="btn btn-sm btn-outline-danger rounded-0" id="studen-empty-data">Vaciar tabla</button>
	          					</tr>
	          				</thead>
	          				<tbody id="table-body-data"></tbody>
	          			</table>
	          		</div>
          		</div>
			</div>
			<div class="col-12 mt-5">
				<div class="card">
					<div class="card-body">
						<div class="alert alert-danger" id="alert-matter-delete"></div>
						<!-- ASIGNATURAS -->
						<div class="alert alert-info rounded-0 text-center" id="msj-info-matter">
	          				Verifica que tus asignaciones actuales esten correctas
	          			</div>
						<table class="table table-striped">
							<thead>
								<tr class="d-flex">
									<span class="lead">
										Asignaturas Actuales
									</span>
									<button class="btn btn-sm btn-outline-danger rounded-0" id="studen-empty-matter">Vaciar tabla</button>
								</tr>
							</thead>
							<tbody id="table-body-matter"></tbody>
						</table>
					</div>
				</div>
			</div>
		</div>	
	</div>
</div>