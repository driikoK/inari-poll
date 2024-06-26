import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { UserService } from './users.service';
import { CreateUserData } from './data/create-user.data';
import { TypesEnum } from './enums/types.enum';
import { TrackService } from './track.service';
import { CreateTrackData } from './data/create-track.data';
import { ApiBody } from '@nestjs/swagger';
import { FilterTrackData } from './data/filter-track.data';

@Controller()
export class UserController {
  constructor(
    private readonly usersService: UserService,
    private readonly trackService: TrackService,
  ) {}

  @Get('/users')
  async getUsers() {
    return this.usersService.findAll();
  }

  @Post('/users')
  async createUser(@Body() user: CreateUserData) {
    return this.usersService.createUser(user);
  }

  @Put('/users')
  async updateUser(@Body() user: CreateUserData) {
    return this.usersService.updateUser(user);
  }

  @Post('/tracks')
  @ApiBody({ type: [CreateTrackData] })
  async addNewTrack(@Body() tracks: CreateTrackData[]) {
    return this.trackService.tracks(tracks);
  }

  @Put('/track/:id')
  @ApiBody({ type: [CreateTrackData] })
  async updateTrack(@Body() tracks: CreateTrackData) {
  }

  @Delete('/track/:id')
  async deleteTrack(@Param('id') id: string) {
    return this.trackService.deleteTrack(id);
  }

  @Get('/tracks')
  async tracks(@Query() filter: FilterTrackData) { 
    return this.trackService.getTracks(filter);
  }

  @Get('/tracks/animeName')
  async tracksAnimeName() {
    return this.trackService.getTrackAnimeNames();
  }

  @Get('/tracks/seasons')
  async tracksSeasons() {
    return this.trackService.getTrackSeasons();
  }


  @Get('/types')
  async getTypes() {
    return [
      TypesEnum.DIRECTOR,
      TypesEnum.DUB,
      TypesEnum.OTHER,
      TypesEnum.SOUND,
      TypesEnum.SUB,
    ];
  }
}
