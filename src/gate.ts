import { HttpException, HttpStatus } from "@nestjs/common";
import { Ticket } from "@prisma/client";
import { Roles } from "./user/roles.enum";

export function gateExists(element: Ticket) {
  if (!element) {
    throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
  }
}

export function gateOwnTicket(ticket: Ticket, user: any) {
  if (ticket.userId != user.id) {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}

export function gateCompanyOwnTicket(ticket: Ticket, user: any) {
  if (ticket.companyId != user.companyId) {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}

export function gateAdmin(user: any, throwable: boolean = true) {
  if (!user.roles.includes(Roles.ROLE_ADMIN)) {
    if (throwable) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    return false
  }

  return true
}

export function gateRoles(roles: Array<Roles>, user: any) {
  if (gateAdmin(user, false)) return

  if (! roles.filter(value => user.roles.includes(value)).length) {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }
}
