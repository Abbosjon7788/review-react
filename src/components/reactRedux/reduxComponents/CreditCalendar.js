import React from 'react';
import {connect} from "react-redux";
import {calculateCredit} from "../actions/bankCreditAction";

const CreditCalendar = (props) => {
	return (
		<div className="w-10/12 border mx-auto my-12 rounded-md overflow-hidden">
			<h1 className="font-semibold font-serif p-6 bg-gray-200 text-xl tracking-wider">Kredit kalendari</h1>
			<div className="flex">
				<div className="w-1/3 p-6">
					<h1 className="font-semibold text-lg mb-2 text-center">Boshlang'ich to'lov summasi</h1>
					<p className="text-center">240000 so'm</p>
				</div>
				<div className="w-1/3 p-6">
					<h1 className="font-semibold text-lg mb-2 text-center">Berilgan kredit summasi</h1>
					<p className="text-center">240000 so'm</p>
				</div>
				<div className="w-1/3 p-6">
					<h1 className="font-semibold text-lg mb-2 text-center">Oylik to'lovi</h1>
					<p className="text-center">240000 so'm</p>
				</div>
			</div>
			<div className="px-6 pb-6">
				<div className="border-t pt-6">
					<table className="w-full table-auto">
						<thead>
							<tr className="border-b-2 border-gray-400">
								<th className="pb-6">№</th>
								<th className="pb-6">Yil</th>
								<th className="pb-6">Oy</th>
								<th className="pb-6">Asosiy qarz</th>
								<th className="pb-6">Oylik to'lov</th>
								<th className="pb-6">Foiz to'lov</th>
								<th className="pb-6">Umumiy</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-center bg-gray-200">
								<td className="py-6">1</td>
								<td className="py-6">2020</td>
								<td className="py-6">December</td>
								<td className="py-6">960000000</td>
								<td className="py-6">80000000</td>
								<td className="py-6">96000000</td>
								<td className="py-6">896000000</td>
							</tr>
							<tr className="text-center">
								<td className="py-6">2</td>
								<td className="py-6">2020</td>
								<td className="py-6">December</td>
								<td className="py-6">960000000</td>
								<td className="py-6">80000000</td>
								<td className="py-6">96000000</td>
								<td className="py-6">896000000</td>
							</tr>
						</tbody>
						
					</table>					
				</div>
				
			</div>
				
		</div>
	);

};

const mapStateToProps = (state) => {
	console.log('this state' + state);
	return state;
};

export default connect(mapStateToProps, {})(CreditCalendar);