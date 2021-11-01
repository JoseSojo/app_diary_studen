<div class="container-fluid my-5" id="task">
	<div class="row">
		<!-- SAVE | SEARCH -->
		<div class="col-12 col-md-4 mt-4">
			<!-- SEARCH TASK -->
			<div class="card p-0 mt-4">
				<div class="card-header lead">
					Buscar tarea
				</div>
				<div class="card-body py-4">
					<form class="d-flex">
						<input type="text" class="form-control border-success shadow-none rounded-0" placeholder="Buscar tarea" id="search-task">
						<button class="btn btn-success col-2 col-md-3 text-light rounded-0">
							<i class="bi-search center-xy"></i>
						</button>
					</form>
				</div>
				<div class="card-footer">
					<ul id="search-result"></ul>
				</div>
			</div>
			<!-- SAVE TASK -->
			<div class="card p-0">
				<div class="card-header lead">
					Guarda tus tareas
				</div>
				<div class="card-body">
					<form id="save-task" autocomplete="off">
						<div class="form-group d-flex my-3">
							<i class="bi-chat-right-text-fill center-xy col-2 col-md-3 bg-light"></i>
							<input type="text" class="form-control shadow-none rounded-0 " placeholder="Asignatura" id="task-title">
						</div>
						<div class="form-group d-flex my-3">
							<i class="bi-clipboard center-xy col-2 col-md-3 bg-light"></i>
							<textarea class="form-control shadow-none rounded-0 " placeholder="Evaluación" id="task-descrip"></textarea>
						</div>
						<div class="form-group d-flex mt-2">
							<button type="submit" class="btn btn-outline-dark rounded-0 shadow-none btn-block w-100 disabled" id="task-submit">
								Guardar Tarea
								<i class="bi-check-circle-fill"></i>
							</button>
						</div>
					</form>
				</div>
				<div class="card-footer">
					<div class="alert alert-success" id="alert-save-task"></div>
				</div>
			</div>
		</div>
		<!-- VIEW -->
		<div class="col-12 col-md-8 mt-4">
			<div class="alert alert-danger" id="delete-task"></div>
			<table class="table table-sm table-bordered table-striped text-center">
				<thead>
					<tr>
						<td class="lead">
							<span>
								Tarea
							</span>
						</td>
						<td class="lead">
							<span>
								descripción
							</span>
						</td>
						<td class="lead">
							<button class="btn btn btn-outline-danger rounded-0" id="task-empty-table">Vaciar Tabla</button>
						</td>
					</tr>
				</thead>
				<tbody id="table-body-task"></tbody>
			</table>
		</div>
	</div>
</div>