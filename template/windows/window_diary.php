<div class="container-fluid" id="diary">
	<div class="row">
		<!-- Search Noti -->
		<div class="card col-10 col-md-5 m-auto p-0" id="card-diary-search">
			<div class="card-header lead">
				Buscar Nota
			</div>
			<div class="card-body py-5">
				<form class="d-flex" autocomplete="off">
					<input type="text" class="form-control border-dark shadow-none rounded-0" placeholder="Buscar Notas" id="search-diary">
					<i class="bi-search center-xy col-3 col-md-2 center-xy bg-dark text-light lead"></i>
				</form>
			</div>
			<div class="card-footer">
				<ul id="diary-search-result"></ul>
			</div>
		</div>	
		<!-- SAVE NOTI -->
		<div class="card col-10 col-md-5 m-auto p-0" id="card-diary-save">
			<div class="card-header lead">
				Guarda en la Agenda
			</div>
			<div class="card-body">
				<form id="save-noti" autocomplete="off">
					<div class="input-group">
						<span class="input-group-text rounded-0 bi-clipboard"></span>
						<input type="text" class="form-control shadow-none rounded-0" placeholder="Nota" id="noti-matter">
					</div>
					<div class="input-group">
						<span class="input-group-text rounded-0 bi-card-text"></span>
						<textarea class="form-control shadow-none rounded-0" id="noti-descript"></textarea>
					</div>
					<div class="form-group d-flex my-3">
						<!-- INPUT DAY -->
						<input type="number" class="form-control rounded-0 shadow-none" placeholder="dia" id="noti-day">
						<!-- INPUT MONTH -->
						<input type="number" class="form-control rounded-0 shadow-none" placeholder="mes" id="noti-month">
						<!-- INPUT YEAR -->
						<input type="number" class="form-control rounded-0 shadow-none" placeholder="año" id="noti-year">
					</div>
					<div class="form-group d-flex mt-2">
						<button type="submit" class="btn btn-outline-dark rounded-0 shadow-none btn-block w-100 disabled" id="noti-submit">
							Guardar Nota
							<i class="bi-check-circle-fill lead"></i>
						</button>
					</div>
				</form>
			</div>
			<div class="card-footer">
				<div class="alert alert-success" id="alert-save-noti"></div>
			</div>
		</div>
	</div>
	<div class="row">
		<!-- See Noti -->
		<div class="col-12 col-md-10 mt-4 m-auto">
			<div class="alert alert-danger" id="alert-delete-noti"></div>
			<table class="table table-sm table-bordered table-striped text-center" id="table-diary">
				<thead>
					<tr class="h6">
						<td>
							<span>
								Asignatura
							</span>
						</td>
						<td>
							<span>
								Evaluación
							</span>
						</td>
						<td class="d-none d-md-block">
							<span class="">
								guardado...
							</span>
						</td>
						<td>
							<span>
								finalizar...
							</span>
						</td>
						<td class="p-0 bg-danger text-light rounded-0" id="diary-empty-see">
							Vaciar tabla
						</td>
					</tr>
				</thead>
				<tbody id="table-body-diary">
					<tr id="alert-delete-noti"></tr>
				</tbody>
			</table>
		</div>
	</div>			
</div>