import docentesData from '/src/data/docentes.json'
export const getDocentesCourse = (idList) => {
    return docentesData.docentesList.filter(docente => idList.includes(docente.id))
}
export const getAllDocentes = () => {
    return docentesData.docentesList;
}