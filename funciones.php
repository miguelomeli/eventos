<?php

if($_REQUEST['key']=='contacto'){
	header('Content-Type: application/json');
	
	
			$titulo = 'Forma de la web';
			$mensaje = '
						<div style="background:#333; padding:30px; width:100%; margin:auto; font-family:Arial, Helvetica, sans-serif; font-size:14px">
						<div align="left" style="background:#333; width:100%;"><img src="http://www.idelika.com/img/logo.png"  /></div>
						<table width="80%" border="0" align="center" cellpadding="0" cellspacing="0">					 

						<tr>
						<td width="27" bgcolor="#FFFFFF">&nbsp;</td>
						<td width="114" bgcolor="#FFFFFF">&nbsp;</td>
						<td width="17" bgcolor="#FFFFFF">&nbsp;</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						</tr>
						<tr>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td colspan="3" bgcolor="#FFFFFF"><b>Nueva forma de contacto</b></td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						</tr>
						<tr>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						</tr>
						<tr>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td align="right" bgcolor="#FFFFFF">&nbsp;</td>
						<td align="right" bgcolor="#FFFFFF">&nbsp;</td>
						<td align="center" bgcolor="#FFFFFF">&nbsp;</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						</tr>
						<tr>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td align="right" bgcolor="#FFFFFF"><strong>Ip:</strong></td>
						<td align="right" bgcolor="#FFFFFF">&nbsp;</td>
						<td align="left" bgcolor="#FFFFFF">'.$_SERVER['REMOTE_ADDR'].'</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>si o hala
						</tr>

						<tr>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td align="right" bgcolor="#FFFFFF"><strong>Fecha Estimada:</strong></td>
						<td align="right" bgcolor="#FFFFFF">&nbsp;</td>
						<td align="left" bgcolor="#FFFFFF">'.utf8_decode($_REQUEST['fecha_estimada']).'</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						</tr>

						<tr>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td align="right" bgcolor="#FFFFFF"><strong>Nombre:</strong></td>
						<td align="right" bgcolor="#FFFFFF">&nbsp;</td>
						<td align="left" bgcolor="#FFFFFF">'.utf8_decode($_REQUEST['nombre']).'</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						</tr>

						<tr>
						  <td bgcolor="#FFFFFF">&nbsp;</td>
						  <td align="right" bgcolor="#FFFFFF"><strong>Correo :</strong></td>
						  <td align="right" bgcolor="#FFFFFF">&nbsp;</td>
						  <td align="left" bgcolor="#FFFFFF">'.utf8_decode($_REQUEST['correo']).'</td>
						  <td bgcolor="#FFFFFF">&nbsp;</td>
						</tr>
						<tr>
						  <td bgcolor="#FFFFFF">&nbsp;</td>
						  <td align="right" bgcolor="#FFFFFF"><strong>Telefono :</strong></td>
						  <td align="right" bgcolor="#FFFFFF">&nbsp;</td>
						  <td align="left" bgcolor="#FFFFFF">'.utf8_decode($_REQUEST['telefono']).'</td>
						  <td bgcolor="#FFFFFF">&nbsp;</td>
						</tr>

						<tr>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td align="right" bgcolor="#FFFFFF"><strong>Comentarios:</strong></td>
						<td align="right" bgcolor="#FFFFFF">&nbsp;</td>
						<td rowspan="2" align="left" valign="top" bgcolor="#FFFFFF">'.utf8_decode($_REQUEST['mensaje']).'</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						</tr>
						<tr>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						<td bgcolor="#FFFFFF">&nbsp;</td>
						</tr>
						</table>
						 </div>';	
			$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
			$cabeceras .= 'Content-type: text/html; charset=UTF-8; format=flowed\n' . "\r\n";	
			$cabeceras .= 'From:web@eventosindependencia.com' . "\r\n";			
		
			@mail('luisglezv3@gmail.com', $titulo, $mensaje, $cabeceras ); 

			$Mensaje = 'Su Mensaje se a envío correctamente !!' ;
			$ArrayResult = array ('response'=>'ok','msg'=>$Mensaje);	
			echo json_encode($ArrayResult);
			exit();
			


	
}




?>