import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('episodes')
export class EpisodesController {
  @Get()
  findAll(@Query('sort') sort: 'asc' | 'desc' = 'desc') {
    console.log(sort);

    return 'All';
  }

  @Get('featured')
  findFeatured() {
    return 'All';
  }

  @Get(':id')
  findOne(@Param() id: string) {
    console.log(id);
    return 'All';
  }

  @Post()
  create(@Body() input: any) {
    console.log(input);
    return 'new';
  }
}
