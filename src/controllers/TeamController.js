const { CreateTeamService, TeamListService, TeamListOneService, TeamDeleteService, TeamUpdateService } = require('../services/TeamServices')


exports.CreateTeam = async (req, res) => {
  let result = await CreateTeamService(req, res);
  return res.status(200).json(result)
}

exports.GetAllTeams = async (req, res) => {
  let result = await TeamListService();
  return res.status(200).json(result)
}

exports.GetOneTeam = async (req, res) => {
  let result = await TeamListOneService(req);
  return res.status(200).json(result)
}

exports.DeleteOneTeam = async (req, res) => {
  let result = await TeamDeleteService(req);
  return res.status(200).json(result)
}

exports.UpdateOneTeam = async (req, res) => {
  let result = await TeamUpdateService(req);
  return res.status(200).json(result)
}