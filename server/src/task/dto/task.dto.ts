import { IsBoolean, IsEnum, IsOptional, IsString } from "class-validator";
import { Transform } from "class-transformer";
import { Priority } from "@prisma/client";

export class TaskDto {
  @IsOptional()
  @IsString()
  name: string

  @IsOptional()
  @IsBoolean()
  isCompleted?: boolean

  @IsOptional()
  @IsString()
  createAt?: string

  @IsEnum(Priority)
  @IsOptional()
  @Transform(({value}) => ('' + value).toLowerCase())
  priority?: Priority;
}
